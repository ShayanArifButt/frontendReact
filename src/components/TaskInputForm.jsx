import React, { useState } from 'react';

const TaskInputForm = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.length <= 10) {
      setError('Task description must be longer than 10 characters.');
      return;
    }
    addTask({ description: taskDescription, deadline });
    setTaskDescription('');
    setDeadline('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="taskDescription">Task Description</label>
        <input
          type="text"
          className="form-control"
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Enter task description"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="deadline">Deadline</label>
        <input
          type="date"
          className="form-control"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
};

export default TaskInputForm;
