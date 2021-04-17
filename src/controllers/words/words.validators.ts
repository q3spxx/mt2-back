import { createValidator } from 'express-joi-validation';
import Joi from 'joi';

const validator = createValidator();

const postWordSchema = Joi.object({
    type: Joi.string().required(),
    main: Joi.object({
        name: Joi.string().required(),
        translate: Joi.string().required(),
    }).required(),
    secondary: Joi.object({
        name: Joi.string().required(),
        translate: Joi.string().required(),
    }),
    third: Joi.object({
        name: Joi.string().required(),
        translate: Joi.string().required(),
    }),
});

const putWordSchema = Joi.object({
    type: Joi.string().required(),
    main: Joi.object({
        name: Joi.string().required(),
        translate: Joi.string().required(),
    }).required(),
    secondary: Joi.object({
        name: Joi.string().required(),
        translate: Joi.string().required(),
    }),
    third: Joi.object({
        name: Joi.string().required(),
        translate: Joi.string().required(),
    }),
});

const idWordSchema = Joi.object({
    id: Joi.number().required(),
});

export const putWordValidator = validator.body(putWordSchema);
export const postWordValidator = validator.body(postWordSchema);
export const idWordValidator = validator.params(idWordSchema);
