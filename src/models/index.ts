import { sequelize } from './sequelize';
import './relations';

export { HistoriesModel } from './histories/histories.model';
export { WordsModel } from './words/words.model';
export { sequelize };

export const connect = async (): Promise<void> => {
    await sequelize.authenticate();
    await sequelize.sync();
};
