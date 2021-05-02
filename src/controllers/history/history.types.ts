import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export interface PostHistorySchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        testType: string;
        wordsAmount: number;
        words: WordDTO[];
    };
}
