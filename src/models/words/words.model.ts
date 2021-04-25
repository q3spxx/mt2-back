import { Sequelize } from 'sequelize';
import { HistoryTable } from '../history/history.table';
import { WordsTable } from './words.table';

export class WordsModel implements IWordsModel {
    public async getWords(params?: WordsQueryParams): Promise<WordDomain[]> {
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
            order: params?.orderBy?.map(({ name, direction }) => [Sequelize.literal(name), direction || 'ASC']),
            raw: true,
        });
    }

    public createWord(word: WordDomain): Promise<WordDomain> {
        return WordsTable.create(word);
    }

    public updateWords({ id, secondary, third, ...rest }: WordDomain): Promise<WordDomain[]> {
        return WordsTable.update(
            {
                secondary: secondary || null,
                third: third || null,
                ...rest,
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
