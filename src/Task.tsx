import React, { useState } from 'react';
import "./Task.css";

interface Task {
    id: number,
    title: string,
    text: string,
    time: string,
}
interface TaskProps {
    task: Task
}

const Task: React.FC<TaskProps> = ({ task }) => {

    const [checked, setChecked] = useState(false); 
    const handleChange = () => {  setChecked(!checked); }; 
    
  return (
    <div className="task list-group-item d-flex gap-3 p-3">
        <input 
            className="task-checkbox form-check-input flex-shrink-0 align-middle" 
            type="checkbox" 
            onChange={handleChange} 
            checked={checked}>
        </input>
        <label>
            <span className="pt-1 form-checked-content">
            <strong>{task.title}</strong>
            <small className="d-block text-muted">
                {task.time}
            </small>
            </span>
        </label>
    </div>

    
  );
}

export default Task;

