import React from 'react';
import Task from './Task';

interface UserProfileProps {
    tasks: Task[],
}

const UserProfile: React.FC<UserProfileProps> = ({ tasks }) => {
    // Group tasks by organization
    const groupedTasks = tasks.reduce((acc, task) => {
        if (!acc[task.organization]) {
            acc[task.organization] = [];
        }
        acc[task.organization].push(task);
        return acc;
    }, {} as { [key: string]: Task[] });

    return (
        <div className="user-profile">
            <h2>Completed Tasks</h2>
            {Object.keys(groupedTasks).map(org => (
                <div key={org}>
                    <h3>{org}</h3>
                    <ul>
                        {groupedTasks[org].map(task => (
                            task.completed?
                                <Task key={task.id} task={task} />
                                :
                                null
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default UserProfile;
