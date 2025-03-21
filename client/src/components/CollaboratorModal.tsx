import { ImCross } from 'react-icons/im';
import { USER_ROLE } from '@/hooks/useTodos';
import { useCollaborator } from '@/hooks/useCollaborator';
import { useForm } from 'react-hook-form';
import { CollaboratorFormValues, collaboratorSchema } from '@/app/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/shared/ui/Button';

interface Props {
    todoListId: string;
    onClose: () => void;
}

export default function CollaboratorModal({ todoListId, onClose }: Props) {
    const { collaborators, isLoading, addCollaborator, removeCollaborator } =
        useCollaborator(todoListId);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CollaboratorFormValues>({
        resolver: zodResolver(collaboratorSchema),
    });

    const onSubmit = (data: CollaboratorFormValues) => {
        addCollaborator({ ...data, listId: todoListId });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/35 bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-lg w-[500px] relative">
                <ImCross
                    onClick={onClose}
                    className="w-5 h-5 hover:fill-red-600 cursor-pointer absolute top-4 right-4"
                />
                <h2 className="text-lg font-bold mb-4">Add Collaborator</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border rounded-md mb-1"
                            {...register('email')}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}

                        <select
                            className="w-full p-2 border rounded-md mt-2"
                            {...register('role')}>
                            <option value={USER_ROLE.ADMIN}>ADMIN</option>
                            <option value={USER_ROLE.VIEWER}>VIEWER</option>
                        </select>
                        {errors.role && (
                            <p className="text-red-500 text-sm">
                                {errors.role.message}
                            </p>
                        )}
                    </div>

                    <Button>Add</Button>
                </form>

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
                                    {collaborator.user.email}{' '}
                                    <span className="text-yellow-400">
                                        {collaborator.role}
                                    </span>
                                </span>
                                <Button
                                    className="bg-red-500 w-[100px] ml-auto hover:bg-red-700"
                                    onClick={() =>
                                        removeCollaborator({
                                            listId: todoListId,
                                            userId: collaborator.user.id,
                                        })
                                    }>
                                    Delete
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
