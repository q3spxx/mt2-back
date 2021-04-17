import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export interface PostWordSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        type: WordType;
        main: {
            name: string;
            translate: string;
        };
        secondary?: {
            name: string;
            translate: string;
        };
        third?: {
            name: string;
            translate: string;
        };
    };
}

export interface PutWordSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        type: WordType;
        main: {
            name: string;
            translate: string;
        };
        secondary?: {
            name: string;
            translate: string;
        };
        third?: {
            name: string;
            translate: string;
        };
    };
}

export interface DeleteWordSchema extends ValidatedRequestSchema {
    [ContainerTypes.Params]: {
        id?: number;
    };
}
