import { Router } from 'express';
import { getTasks, updateTask } from './controllers/TasksController';

const TasksRoutes = Router();

TasksRoutes.get('/', getTasks);
TasksRoutes.put('/:id', updateTask);

export default TasksRoutes;
