import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { USER_ROLE } from '@/hooks/useTodos';
import { useCollaborator } from '@/hooks/useCollaborator';

interface Props {
    todoListId: string;
    onClose: () => void;
}

export default function CollaboratorModal({ todoListId, onClose }: Props) {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState<USER_ROLE>(USER_ROLE.VIEWER);

    const { collaborators, isLoading, addCollaborator, removeCollaborator } =
        useCollaborator(todoListId);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/35 bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-lg w-96 relative">
                <ImCross
                    onClick={onClose}
                    className="w-5 h-5 hover:fill-red-600 cursor-pointer absolute top-4 right-4"
                />
                <h2 className="text-lg font-bold mb-4">Add Collaborator</h2>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded-md mb-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <select
                        className="w-full p-2 border rounded-md"
                        value={role}
                        onChange={(e) => setRole(e.target.value as USER_ROLE)}>
                        <option value="editor">ADMIN</option>
                        <option value="viewer">VIEWER</option>
                    </select>
                </div>

                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                    onClick={() =>
                        addCollaborator({ email, role, listId: todoListId })
                    }>
                    Add
                </button>

                <h3 className="text-lg font-semibold mt-4">Collaborators:</h3>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul className="mt-2 space-y-2">
                        {collaborators?.map((collaborator) => (
                            <li
                                key={collaborator.id}
                                className="flex justify-between items-center p-2 border rounded-md">
                                <span>
                                    {collaborator.email} ({collaborator.role})
                                </span>
                                <button
                                    className="text-red-500"
                                    onClick={() =>
                                        removeCollaborator(collaborator.id)
                                    }>
                                    Удалить
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
