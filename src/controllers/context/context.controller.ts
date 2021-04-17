import { Router } from 'express';
import { ContextService } from '@services';

const contextService = new ContextService();
export const contextController = Router();

contextController.get('/context', async (_, response) => {
    contextService.getContext().then(data => response.json(data));
});
