import React, { useState, useEffect } from 'react';
import TaskInputForm from '../components/TaskInputForm';
import TaskTable from '../components/TaskTable';
import axios from 'axios';
import { ENDPOINTS } from '../config/config';


const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(ENDPOINTS.TASKS)
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTask = (task) => {
    task.done = false;
    axios.post(ENDPOINTS.TASKS, task)
      .then(response =>  setTasks([...tasks, response.data]))
      .catch(error => console.error(error));
  };

  const deleteTask = (taskId) => {
    axios.delete(`${ENDPOINTS.TASKS}/${taskId}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== taskId)))
      .catch(error => console.error(error));
  };

  const markAsDone = (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...taskToUpdate, done: true };
    axios.put(`${ENDPOINTS.TASKS}/${taskId}`, updatedTask)
      .then(response => setTasks(tasks.map((task) => task.id === taskId ? response.data : task)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h1>ToDo App</h1>
      <TaskInputForm addTask={addTask} />
      <TaskTable tasks={tasks} deleteTask={deleteTask} markAsDone={markAsDone} />
    </div>
  );
};

export default HomePage;
