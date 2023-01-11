import React, { useRef, useState } from 'react';
import DraggableList from './DraggableList';
import Task from './Task';

interface TaskBoardProps {
    tasks: Task[],
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {

    const items = tasks.map(task => (
        <Task key={task.id} task={task} />
    ));

    return (
      <div className="task-board">
        <div className="flex fill center">
            <DraggableList items={items} />
            <div className="footer d-grid mt-auto">
                <button className="btn btn-outline-primary" type="button">
                <i className="fa-solid fa-circle-plus"></i> Add Task</button>
            </div>
        </div>
      </div>
    );
  }

export default TaskBoard;
