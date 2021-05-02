import { Router } from 'express';
import { HistoryService } from '@services';
import { ValidatedRequest } from 'express-joi-validation';
import { postHistoryValidator } from './history.validators';
import { PostHistorySchema } from './history.types';

const historyService = new HistoryService();

export const historyController = Router();

historyController
    .route('/v1/history')
    .get(async (_, response) => {
        historyService.getHistories().then(data => response.json(data));
    })
    .post(postHistoryValidator, async (request: ValidatedRequest<PostHistorySchema>, response) => {
        historyService.createHistory(request.body).then(data => response.json(data));
    });
