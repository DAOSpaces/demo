import React from 'react';
import styles from './Task.module.css';

interface Task {
    id: number,
    text: string
}
interface TaskProps {
    task: Task
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (

    <a href="#" className="task list-group-item list-group-item-action d-flex gap-3 p-3" aria-current="true">
        <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"></img>
        <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
            <h6 className="mb-0">{task.id}</h6>
            <p className="mb-0 opacity-75">{task.text}</p>
        </div>
        <small className="opacity-50 text-nowrap">now</small>
        </div>
    </a>
  );
}

export default Task;
