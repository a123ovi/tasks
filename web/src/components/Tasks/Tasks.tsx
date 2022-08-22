import { useApiInstance } from '../../utils/api';
import React, { ReactElement, Suspense, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { Task } from '../../types/task';
import { DropdownItem } from '../../types/dropdown';
import { useTasks } from '../../hooks/useTasks';

const StyledDropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  color: gray;
`;

export const Tasks = (): ReactElement => {
  const [tasksQuantity, setTasksQuantity] = useState(3);
  const { data: tasks = [] } = useTasks(tasksQuantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  const handleOnCompleteTask = (
    e: MouseEvent<HTMLButtonElement>,
    task?: Task,
  ) => {
    e.preventDefault();
    const api = useApiInstance();
    api.put(`tasks/${task?.id}`);
    setIsModalOpen(false);
  };

  const handleOnClickCard = (e: MouseEvent<HTMLDivElement>, task?: Task) => {
    e.preventDefault();
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleOnCloseModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const handleOnItemSelected = (item: DropdownItem) => {
    setTasksQuantity(item.id);
  };

  const dropdownItems = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    label: (index + 1).toString(),
  }));
  return (
    <>
      <StyledDropdownContainer>
        <p>Quantity of tasks:</p>
        <Dropdown
          items={dropdownItems}
          onItemSelected={handleOnItemSelected}
          title="Select quantity of tasks"
          defaultItemId={3}
        />
      </StyledDropdownContainer>
      <Suspense fallback={<div>Loading...</div>}>
        {tasks.map((task: Task) => (
          <Card
            key={task.id}
            onClick={(e) => handleOnClickCard(e, task)}
            title={task.title}
          />
        ))}
        <Modal isOpen={isModalOpen}>
          <>
            <h2>Id: {selectedTask?.id}</h2>
            <p>Title: {selectedTask?.title}</p>
        
              <Button
                onClick={(e: MouseEvent<HTMLButtonElement>) =>
                  handleOnCompleteTask(e, selectedTask)
                }
              >
                Complete
              </Button>
              <Button onClick={handleOnCloseModal}>Close</Button>
      
          </>
        </Modal>
      </Suspense>
    </>
  );
};
