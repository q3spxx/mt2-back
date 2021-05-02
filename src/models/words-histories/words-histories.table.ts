import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';

export class WordsHistoriesTable extends Model {
    id!: number;

    rating!: number;

    wrongs!: number;

    spendedTime!: number;

    createdAt!: string;
}

WordsHistoriesTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        wordId: {
            type: DataTypes.INTEGER,
        },
        testId: {
            type: DataTypes.INTEGER,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        wrongs: {
            type: DataTypes.INTEGER,
        },
        spendedTime: {
            type: DataTypes.INTEGER,
        },
    },
    {
        modelName: 'wordsHistories',
        sequelize,
        freezeTableName: true,
    }
);
