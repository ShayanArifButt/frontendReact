import React from 'react';
import TaskRow from './TaskRow';

const TaskTable = ({ tasks, deleteTask, markAsDone }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Deadline</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            markAsDone={markAsDone}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
