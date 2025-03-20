import React, { useState } from 'react';
import { USER_ROLE, useTodos } from '@/hooks/useTodos';
import { ImCross } from 'react-icons/im';
import { IoMdPersonAdd } from 'react-icons/io';
import Button from '@/shared/ui/Button';
import CollaboratorModal from './CollaboratorModal';

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
    role?: USER_ROLE;
}

const TodoCard = ({ id, name, tasks, role }: TodoCardProps) => {
    const { addTask, deleteTask, updateTaskStatus, deleteTodo } = useTodos();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [newTaskTitle, setNewTaskTitle] = useState<string>('');
    const [newTaskDescription, setNewTaskDescription] = useState<string>('');

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

    const isViewer = role === USER_ROLE.VIEWER;

    return (
        <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-md relative">
            {!role && (
                <div className="absolute top-4 right-4 h-5 hover:fill-red-600 cursor-pointer flex items-center gap-4 w-fit">
                    <IoMdPersonAdd
                        onClick={() => setIsModalOpen(true)}
                        className="w-7 h-7 hover:fill-green-600 cursor-pointer"
                    />
                    <ImCross
                        onClick={() => deleteTodo(id)}
                        className="w-5 h-5 hover:fill-red-600 cursor-pointer"
                    />
                </div>
            )}
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            {role && (
                <p className="bg-yellow-200 w-fit py-1 px-2 border-rounded mb-2">
                    You are {role}
                </p>
            )}
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
                        {!isViewer && (
                            <div className="flex gap-2">
                                <button
                                    className="text-red-600 hover:text-red-900 cursor-pointer"
                                    onClick={() => deleteTask(task.id)}>
                                    ❌
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {!isViewer && (
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

                    <Button onClick={handleAddTask}>Add task</Button>
                </div>
            )}
            {isModalOpen && (
                <CollaboratorModal
                    todoListId={id}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default TodoCard;
