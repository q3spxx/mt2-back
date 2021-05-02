import { createValidator } from 'express-joi-validation';
import Joi from 'joi';

const validator = createValidator();

const postHistorySchema = Joi.object({
    testType: Joi.string().required(),
    wordsAmount: Joi.number().required(),
    words: Joi.array()
        .items({
            id: Joi.number().required(),
            rating: Joi.number().required(),
            wrongs: Joi.number().required(),
            spendedTime: Joi.number().required(),
        })
        .required(),
});

export const postHistoryValidator = validator.body(postHistorySchema);
