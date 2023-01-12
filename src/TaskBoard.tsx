import React from 'react';
import DraggableList from './DraggableList';
import Task from './Task';
import { Utils } from './Utils';

interface TaskBoardProps {
    tasks: Task[],
    date: Date,
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, date }) => {

    const items = tasks
    .filter(task => {
      if (!task.date) { return true; }
      return task.date.getDate() === date.getDate() 
      && task.date.getMonth() === date.getMonth() 
      && task.date.getFullYear() === date.getFullYear();
    })
    .map(task => (
        <Task key={task.id} task={task} />
    ));

    return (
      <div className="task-board">
        <div className="flex fill center header-spacer">
          <h2 className='mt-2 mb-0'>{Utils.getDayName(date)}</h2>
          <div>{date.toDateString().substr(4)}</div>
          <hr></hr>
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
