import { Router } from 'express';
import { HistoryService } from '@services';
import { ValidatedRequest } from 'express-joi-validation';
import { deleteHistoryValidator, postHistoryValidator } from './history.validators';
import { DeleteHistorySchema, PostHistorySchema } from './history.types';

const historyService = new HistoryService();
export const historyController = Router();

historyController
    .route('/v1/history')
    .get(async (_, response) => {
        historyService.getHistories().then(data => response.json(data));
    })
    .post(postHistoryValidator, async (request: ValidatedRequest<PostHistorySchema>, response) => {
        historyService.createHistories(request.body.histories).then(data => response.json(data));
    });

historyController
    .route('/v1/history/:id')
    .delete(deleteHistoryValidator, async (request: ValidatedRequest<DeleteHistorySchema>, response) => {
        historyService.deleteHistory(request.params.id).then(data => response.json(`${data} items were deleted`));
    });
