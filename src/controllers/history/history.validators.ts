import { createValidator } from 'express-joi-validation';
import Joi from 'joi';

const validator = createValidator();

const postHistorySchema = Joi.object({
    histories: Joi.array()
        .items(
            Joi.object({
                wordId: Joi.number().required(),
                rating: Joi.number().required(),
                wrongs: Joi.number().required(),
            })
        )
        .required(),
});

const deleteHistorySchema = Joi.object({
    id: Joi.number().required(),
});

export const postHistoryValidator = validator.body(postHistorySchema);
export const deleteHistoryValidator = validator.params(deleteHistorySchema);
