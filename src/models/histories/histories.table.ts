import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';

export class HistoriesTable extends Model {
    id!: number;

    testType!: string;

    wordsAmount!: number;

    createdAt!: string;
}

HistoriesTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        testType: {
            type: DataTypes.TEXT,
        },
        wordsAmount: {
            type: DataTypes.INTEGER,
        },
    },
    {
        modelName: 'histories',
        sequelize,
        freezeTableName: true,
    }
);
