import { Sequelize } from 'sequelize';
import { HistoryTable } from '../history/history.table';
import { WordsTable } from './words.table';

export class WordsModel implements IWordsModel {
    public async getWords(): Promise<WordDomain[]> {
        return WordsTable.findAll({
            attributes: [
                'id',
                'main',
                'secondary',
                'third',
                'type',
                [Sequelize.fn('sum', Sequelize.fn('COALESCE', Sequelize.col('history.rating'), 0)), 'rating'],
                [Sequelize.fn('sum', Sequelize.fn('COALESCE', Sequelize.col('history.wrongs'), 0)), 'wrongs'],
            ],
            include: [
                {
                    model: HistoryTable,
                    as: 'history',
                    attributes: [],
                },
            ],
            group: ['words.id', 'history.wordId'],
            raw: true,
        });
    }

    public createWord({ main, secondary, third, type }: WordDomain): Promise<WordDomain> {
        return WordsTable.create({
            main,
            secondary,
            third,
            type,
        });
    }

    public updateWords({ id, main, secondary, third, type }: WordDomain): Promise<WordDomain[]> {
        return WordsTable.update(
            {
                main,
                secondary,
                third,
                type,
            },
            {
                where: {
                    id,
                },
                returning: true,
            }
        ).then(([, data]) => data);
    }

    public deleteWord(id: number): Promise<number> {
        return WordsTable.destroy({
            where: {
                id,
            },
        });
    }
}
