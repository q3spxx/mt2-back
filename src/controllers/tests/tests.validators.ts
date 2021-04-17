import { createValidator } from 'express-joi-validation';
import Joi from 'joi';

const validator = createValidator();

const getTestsSchema = Joi.object({
    limit: Joi.number(),
});

export const getTestsValidator = validator.query(getTestsSchema);
