import { api } from '@/app/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { USER_ROLE } from './useTodos';
import { handleError } from '@/utils/handleError';

const COLLABORATORS_ROUTE = '/collaborators';

interface User {
    id: string;
    email: string;
    name: string;
}

interface Collaborator {
    id: string;
    role: USER_ROLE;
    user: User;
}

interface CollaboratorAdd {
    email: string;
    role: USER_ROLE;
    listId: string;
}

interface CollaboratorDelete {
    userId: string;
    listId: string;
}

const fecthCollaborators = async (todoListId: string) => {
    const { data } = await api.get<Collaborator[]>(
        `${COLLABORATORS_ROUTE}/${todoListId}`,
        {
            withCredentials: true,
        }
    );
    return data;
};

const addCollaborator = async (collaborator: CollaboratorAdd) => {
    try {
        const response = await api.post(COLLABORATORS_ROUTE, collaborator, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const deleteCollaborator = async (data: CollaboratorDelete) => {
    try {
        await api.delete(COLLABORATORS_ROUTE, {
            data,
            withCredentials: true,
        });
    } catch (error) {
        handleError(error);
    }
};

export function useCollaborator(todoListId: string) {
    const queryClient = useQueryClient();

    const { data: collaborators, isLoading } = useQuery({
        queryFn: () => fecthCollaborators(todoListId),
        queryKey: ['collaborators', todoListId],
    });

    const addCollaboratorMutation = useMutation({
        mutationFn: addCollaborator,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['collaborators', todoListId],
            });
        },
    });

    const deleteCollaboratorMutation = useMutation({
        mutationFn: deleteCollaborator,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['collaborators', todoListId],
            });
        },
    });

    return {
        collaborators,
        isLoading,
        addCollaborator: addCollaboratorMutation.mutate,
        removeCollaborator: deleteCollaboratorMutation.mutate,
    };
}
