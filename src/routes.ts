import { Router } from 'express';

import RepositoryController from './controllers/RepositoryController';

const router = Router();

router.get('/search', RepositoryController.search)

router.get('/list', RepositoryController.list)

//teste, depois remover a rota e o cotnroller
router.get('/listlogs', RepositoryController.listLog)

export default router;