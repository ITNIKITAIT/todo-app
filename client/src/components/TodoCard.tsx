import React, { useState } from 'react';
import { useTodos } from '@/hooks/useTodos';

interface Task {
    id: string;
    title: string;
    description: string;
    status: boolean;
}

interface TodoCardProps {
    id: string;
    name: string;
    ownerId: string;
    tasks: Task[];
}

const TodoCard = ({ id, name, tasks }: TodoCardProps) => {
    const { addTask, deleteTask, updateTaskStatus } = useTodos();
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const handleAddTask = () => {
        if (!newTaskTitle.trim()) return;
        addTask({
            title: newTaskTitle,
            description: newTaskDescription,
            status: false,
            listId: id,
        });
        setNewTaskTitle('');
        setNewTaskDescription('');
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-md">
            <h2 className="text-xl font-bold mb-2">{name}</h2>

            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`p-3 rounded-lg border flex justify-between items-center ${
                            task.status
                                ? 'border-green-500 bg-green-100'
                                : 'border-gray-300'
                        }`}>
                        <div className="flex gap-3 items-center">
                            <button
                                className="text-green-600 hover:text-green-800"
                                onClick={() =>
                                    updateTaskStatus({
                                        taskId: task.id,
                                        status: !task.status,
                                    })
                                }>
                                {task.status ? '✅' : '⬜'}
                            </button>
                            <div>
                                <h3 className="font-semibold">{task.title}</h3>
                                <p className="text-sm text-gray-600">
                                    {task.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="text-red-600 hover:text-red-900 cursor-pointer"
                                onClick={() => deleteTask(task.id)}>
                                ❌
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="border p-2 w-full rounded-md mb-2"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    className="border p-2 w-full rounded-md mb-2"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                    Add task
                </button>
            </div>
        </div>
    );
};

export default TodoCard;
