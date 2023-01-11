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
        </div>
      </div>
    );
  }

export default TaskBoard;
