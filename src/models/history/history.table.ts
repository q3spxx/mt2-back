import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';

export class HistoryTable extends Model {
    id!: number;

    wordId!: number;

    rating!: number;

    wrongs!: number;

    createdAt!: string;
}

HistoryTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        wordId: {
            type: DataTypes.INTEGER,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        wrongs: {
            type: DataTypes.INTEGER,
        },
    },
    {
        modelName: 'history',
        sequelize,
        freezeTableName: true,
    }
);
