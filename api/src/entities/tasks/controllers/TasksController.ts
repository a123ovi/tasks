import { Response, Request } from 'express';
import { generateTasks , insertTasks, getTasks as getTasksFromCache } from '../services/TasksService';
import { Task } from '../models/Task';


export async function getTasks(req: Request, res: Response): Promise<Response<Task[]>> {
  const { query: { quantity = 3 }} = req;

  if(!quantity) {
    throw new Error('Invalid request');
  }

  const tasks = await getTasksFromCache();

  const quant = parseInt(quantity as string);
  if (tasks.length >= quant) {
    return res.send(tasks.slice(0, quant));
  }

  const tasksQuantity = quant - tasks.length;
  const tasksToCreate = await generateTasks(tasksQuantity);
  const createdTasks = await insertTasks(tasksToCreate);
  return res.send(createdTasks);
}

export async function updateTask(req: Request, res: Response): Promise<Response<void>> {
  const { params: { id }} = req;

  if(!id) {
    throw new Error('Invalid request');
  }

  console.log(`updateTask has been called with`, { id });
  
  return res.send();
}

