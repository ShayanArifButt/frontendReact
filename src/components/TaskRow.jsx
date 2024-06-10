import React from 'react';

const TaskRow = ({ task, deleteTask, markAsDone }) => {

  const rowClass = task.isOverdue ? 'table-danger' : '';

  return (
    <tr className={rowClass}>
      <td>{task.description}</td>
      <td>{task.deadline}</td>
      <td>{task.done ? 'Done' : 'Pending'}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
        <button className="btn btn-success" onClick={() => markAsDone(task.id)}>Mark as Done</button>
      </td>
    </tr>
  );
};

export default TaskRow;
