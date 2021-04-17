import { Router } from 'express';
import { WordsService } from '@services';
import { ValidatedRequest } from 'express-joi-validation';
import { idWordValidator, postWordValidator, putWordValidator } from './words.validators';
import { DeleteWordSchema, PostWordSchema, PutWordSchema } from './words.types';

const wordsService = new WordsService();
export const wordsController = Router();

wordsController
    .route('/words')
    .get(async (_, response) => {
        wordsService.getWords().then(data => response.json(data));
    })
    .post(postWordValidator, async (request: ValidatedRequest<PostWordSchema>, response) => {
        wordsService.createWord(request.body).then(data => response.json(data));
    });

wordsController
    .route('/words/:id')
    .all(idWordValidator)
    .put(putWordValidator, async (request: ValidatedRequest<PutWordSchema>, response) => {
        wordsService.updateWords({ ...request.body, id: request.params.id }).then(data => response.json(data));
    })
    .delete(async (request: ValidatedRequest<DeleteWordSchema>, response) => {
        wordsService.deleteWord(request.params.id).then(data => response.json(`${data} items were deleted`));
    });
