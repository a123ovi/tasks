import { Router } from 'express';
import TasksRoutes from './entities/tasks/TasksRoutes';

const Routes = Router();

Routes.use('/tasks', TasksRoutes);

export default Routes;
