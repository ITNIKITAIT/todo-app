import { api } from '@/app/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { USER_ROLE } from './useTodos';

const COLLABORATORS_ROUTE = '/collaborators';

interface Collaborator {
    id: string;
    email: string;
    role: USER_ROLE;
}

interface CollaboratorAdd {
    email: string;
    role: USER_ROLE;
    listId: string;
}

export function useCollaborator(todoListId: string) {
    const queryClient = useQueryClient();

    const { data: collaborators, isLoading } = useQuery({
        queryKey: ['collaborators', todoListId],
        queryFn: async () => {
            const { data } = await api.get<Collaborator[]>(COLLABORATORS_ROUTE);
            return data;
        },
    });

    const addCollaborator = useMutation({
        mutationFn: async (collaborator: CollaboratorAdd) => {
            await axios.post(COLLABORATORS_ROUTE, collaborator);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['collaborators', todoListId],
            });
        },
    });

    const removeCollaborator = useMutation({
        mutationFn: async (collaboratorId: string) => {
            await axios.delete(`${COLLABORATORS_ROUTE}/${collaboratorId}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['collaborators', todoListId],
            });
        },
    });

    return {
        collaborators,
        isLoading,
        addCollaborator: addCollaborator.mutate,
        removeCollaborator: removeCollaborator.mutate,
    };
}
