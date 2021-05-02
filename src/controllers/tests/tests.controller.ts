import { Router } from 'express';
import { TestsService } from '@services';
import { getTestsValidator } from './tests.validators';

const testsService = new TestsService();
export const testsController = Router();

testsController.route('/v1/tests').get(getTestsValidator, async (request, response) => {
    testsService.getTestWords(Number(request.query.limit)).then(data => response.json(data));
});
