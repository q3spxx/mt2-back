import { Sequelize } from 'sequelize';
import { WordsTable } from '../words/words.table';
import { WordsHistoriesTable } from '../words-histories/words-histories.table';
import { HistoriesTable } from './histories.table';

export class HistoriesModel implements IHistoriesModel {
    public async getHistories(): Promise<HistoryDomain[]> {
        const histories = await HistoriesTable.findAll({
            group: ['histories.id', 'wordsHistories.id', 'wordsHistories->word.id'],
            include: [
                {
                    model: WordsHistoriesTable,
                    attributes: [
                        'rating',
                        'wrongs',
                        'spendedTime',
                        [Sequelize.literal('"wordsHistories->word"."id"'), 'id'],
                        [Sequelize.literal('"wordsHistories->word"."main"'), 'main'],
                        [Sequelize.literal('"wordsHistories->word"."secondary"'), 'secondary'],
                        [Sequelize.literal('"wordsHistories->word"."third"'), 'third'],
                        [Sequelize.literal('"wordsHistories->word"."type"'), 'type'],
                    ],
                    include: [
                        {
                            model: WordsTable,
                            attributes: [],
                        },
                    ],
                },
            ],
        });

        return histories.map(history => history.get({ plain: true }));
    }

    public createHistory(history: HistoryDomain): Promise<HistoryDomain> {
        return HistoriesTable.create(history, {
            include: [
                {
                    model: WordsHistoriesTable,
                },
            ],
        });
    }
}
