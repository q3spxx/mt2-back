import { NotFoundError } from '@helpers';
import { Response, Router } from 'express';

export const notFoundController = Router();

notFoundController.all('*', async (_, response: Response<NotFoundError>) => {
    response.status(404);
    response.json(new NotFoundError('Not found'));
});
