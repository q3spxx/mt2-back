import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export interface GetTestsSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        limit?: number;
    };
}
