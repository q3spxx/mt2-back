import { sequelize } from './sequelize';

export { WordsModel } from './words/words.model';
export { HistoryModel } from './history/history.model';

export const connect = async (): Promise<void> => {
    await sequelize.authenticate();
    await sequelize.sync();
};
