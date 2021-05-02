import { Sequelize } from 'sequelize';
import { WordsHistoriesTable } from '../words-histories/words-histories.table';
import { WordsTable } from './words.table';

export class WordsModel implements IWordsModel {
    public async getWords(options?: QueryOptions<keyof WordDomain>): Promise<WordDomain[]> {
        return WordsTable.findAll({
            attributes: [
                'id',
                'main',
                'secondary',
                'third',
                'type',
                [Sequelize.fn('sum', Sequelize.fn('COALESCE', Sequelize.col('wordsHistories.rating'), 0)), 'rating'],
                [Sequelize.fn('sum', Sequelize.fn('COALESCE', Sequelize.col('wordsHistories.wrongs'), 0)), 'wrongs'],
            ],
            include: [
                {
                    model: WordsHistoriesTable,
                    attributes: [],
                },
            ],
            group: ['words.id', 'wordsHistories.wordId'],
            order: options?.orderBy?.map(({ name, direction }) => [Sequelize.literal(name), direction || 'ASC']),
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
