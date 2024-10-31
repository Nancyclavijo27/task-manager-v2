"use client"; // Indica que este es un componente de cliente

import React, { useEffect, useState } from 'react';
import TaskList from '../../components/TaskList';
import axios from 'axios';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tareas</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TasksPage;
