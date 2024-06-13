import React from 'react';

const TaskRow = ({ task, deleteTask, markAsDone }) => {

  const taskDeadline = new Date(task.deadline);
  taskDeadline.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isOverdue = taskDeadline < today;
  const rowClass = isOverdue ? 'table-danger' : '';

  return (
    <tr className={rowClass}>
      <td>{task.description}</td>
      <td>{task.deadline}</td>
      <td>{task.isDone ? 'Done' : 'Pending'}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
        <button className="btn btn-success" onClick={() => markAsDone(task.id)}>Mark as Done</button>
      </td>
    </tr>
  );
};

export default TaskRow;
