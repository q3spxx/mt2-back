import { Router } from 'express';
import { contextController } from './context/context.controller';
import { historyController } from './history/history.controller';
import { notFoundController } from './not-found/not-found.controller';
import { testsController } from './tests/tests.controller';
import { wordsController } from './words/words.controller';

export const rootController = Router();

rootController.use(wordsController, contextController, historyController, testsController, notFoundController);
