import { Router } from 'express';
import { WordsService } from '@services';
import { ValidatedRequest } from 'express-joi-validation';
import { getTestsValidator } from './tests.validators';
import { GetTestsSchema } from './tests.types';

const wordsService = new WordsService();
export const testsController = Router();

testsController
    .route('/v1/tests')
    .get(getTestsValidator, async (request: ValidatedRequest<GetTestsSchema>, response) => {
        wordsService.getRandomWords(request.query.limit).then(data => response.json(data));
    });
