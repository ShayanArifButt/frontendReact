import React, { useState, useEffect } from 'react';
import TaskInputForm from '../components/TaskInputForm';
import TaskTable from '../components/TaskTable';
import axios from 'axios';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTask = (task) => {
    task.done = false;
    task.isOverdue = new Date(task.deadline) < new Date();
    axios.post('http://localhost:5000/tasks', task)
      .then(response =>  setTasks([...tasks, response.data]))
      .catch(error => console.error(error));
  };

  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:5000/tasks/${taskId}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== taskId)))
      .catch(error => console.error(error));
  };

  const markAsDone = (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...taskToUpdate, done: true };
    axios.put(`http://localhost:5000/tasks/${taskId}`, updatedTask)
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
