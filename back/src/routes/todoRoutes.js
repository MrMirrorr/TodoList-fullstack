import express from 'express';
import * as TodoController from '../controllers/todoController.js';

const router = express.Router();

router.get('/', TodoController.getAll);

router.post('/', TodoController.create);

router.put('/:id', TodoController.update);

router.patch('/:id', TodoController.update);

router.delete('/:id', TodoController.remove);

export default router;
