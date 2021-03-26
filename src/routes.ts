import { Router } from 'express';

import RepositoryController from './controllers/RepositoryController';

const router = Router();

/**
 * @swagger
 * /search:
 *  get:
 *    description: Use to search the repository on GitHub API
 *    responses:
 *      '200':
 *          description: List of Issues on GitHub repository
 *      '401':
 *          description: Invalid JWT_TOKEN
 *      '500':
 *          description: Name of repository is empty, invalid or Unexpected error
 *    parameters:
 *       - in: query
 *         name: searchRepo 
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the repository
 *       - in: header
 *         name: Content-Type
 *         schema:
 *           type: string
 *       - in: header
 *         name: jwt_token
 *         schema:
 *           type: string
 *         required: true 
 *       - in: header
 *         name: user
 *         schema:
 *           type: string
 *         required: true
 *  
 */
router.get('/search', RepositoryController.search)

/**
 * @swagger
 * /list:
 *  get:
 *    description: Use to list the repository searched on database
 *    responses:
 *      '200':
 *          description: List of repositories on database
 */
router.get('/list', RepositoryController.list)

//teste, depois remover a rota e o cotnroller
router.get('/listlogs', RepositoryController.listLog)

export default router;