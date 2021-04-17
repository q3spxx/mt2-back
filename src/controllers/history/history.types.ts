import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export interface PostHistorySchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        histories: HistoryParams[];
    };
}

export interface DeleteHistorySchema extends ValidatedRequestSchema {
    [ContainerTypes.Params]: {
        id?: number;
    };
}
