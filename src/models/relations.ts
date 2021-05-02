import { WordsHistoriesTable } from './words-histories/words-histories.table';
import { HistoriesTable } from './histories/histories.table';
import { WordsTable } from './words/words.table';

WordsTable.hasMany(WordsHistoriesTable, {
    foreignKey: {
        name: 'wordId',
    },
    constraints: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

WordsHistoriesTable.belongsTo(WordsTable, {
    foreignKey: {
        name: 'wordId',
    },
    constraints: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

HistoriesTable.hasMany(WordsHistoriesTable, {
    foreignKey: {
        name: 'testId',
    },
    constraints: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
