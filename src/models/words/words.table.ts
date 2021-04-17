import { DataTypes, Model } from 'sequelize';
import { HistoryTable } from '../history/history.table';
import { sequelize } from '../sequelize';

export class WordsTable extends Model {
    id!: number;

    main!: string;

    secondary!: string;

    third!: string;

    rating!: number;

    wrongs!: number;

    type!: WordType;
}

WordsTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        main: {
            type: DataTypes.TEXT,
        },
        secondary: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        third: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        type: {
            type: DataTypes.TEXT,
        },
    },
    {
        modelName: 'words',
        sequelize,
        timestamps: false,
    }
);

WordsTable.hasMany(HistoryTable, {
    foreignKey: {
        name: 'wordId',
    },
    as: 'history',
    constraints: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
