import { useQuery, UseQueryResult } from 'react-query';
import { Task } from '../types/task';
import { useApiInstance } from '../utils/api';

export function useTasks(quantity: number): UseQueryResult<Task[]> {
  const api = useApiInstance();

  return useQuery<Task[]>(
    ['tasks', quantity],

    async () => {
      const tasksData = (await api.get<Task[]>(`tasks?quantity=${quantity}`))
        .data;
      return tasksData;
    },

    {
      keepPreviousData: true,
      notifyOnChangeProps: ['data', 'isFetching'],
    },
  );
}
