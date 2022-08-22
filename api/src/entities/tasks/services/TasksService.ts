import axios from 'axios';
import { v4 } from 'uuid';
import redis from 'redis';
import { Task } from '../models/Task';

const generateRandomNames = async (quantity: number): Promise<string[]> =>{
  const result = await axios.get(`https://lorem-faker.vercel.app/api?quantity=${quantity}`);
  return result.data;
}

export const generateTasks = async (quantity: number): Promise<Task[]> => {
  const titles = await generateRandomNames(quantity);
  return Array.from({ length: quantity }, (_, index) =>({
    id: v4(),
    title: titles[index]
  }));
}

export const getTasks = (): Promise<Task[]> => {
  const redisClient = redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT });
  return new Promise((resolve) =>
    redisClient.get('tasks',  (_, reply) => {
    return resolve(JSON.parse(reply || '[]'));
  }));
}

export const insertTasks = async (tasks: Task[]): Promise<Task[]> => {
  const redisClient = redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT });
  const currentTasks = await getTasks();
  const newTasks = [ ...currentTasks, ...tasks];
  redisClient.set('tasks', JSON.stringify(newTasks));
  return newTasks;
}