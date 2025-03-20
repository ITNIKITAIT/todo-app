'use client';
import { api } from '@/app/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface Task {
    id: string;
    title: string;
    description: string;
    status: boolean;
    listId: string;
}

interface Todo {
    id: string;
    name: string;
    ownerId: string;
    tasks: Task[];
}

const fetchTodos = async (): Promise<Todo[]> => {
    try {
        const response = await api.get<Todo[]>('/todos', {
            withCredentials: true,
        });
        return response.data ?? [];
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
};

export const useTodos = () => {
    const queryClient = useQueryClient();

    const {
        data: todos,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    });

    const addTodoMutation = useMutation({
        mutationFn: async (newTodo: Pick<Todo, 'name'>) => {
            const response = await api.post<Task>('/todos', newTodo, {
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const addTaskMutation = useMutation({
        mutationFn: async (newTask: Omit<Task, 'id'>) => {
            const response = await api.post<Task>('/tasks', newTask, {
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const deleteTaskMutation = useMutation({
        mutationFn: async (taskId: string) => {
            await api.delete(`/tasks/${taskId}`, { withCredentials: true });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const updateTaskStatusMutation = useMutation({
        mutationFn: async ({
            taskId,
            status,
        }: {
            taskId: string;
            status: boolean;
        }) => {
            await api.patch(
                `/tasks/${taskId}/status`,
                { status },
                { withCredentials: true }
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    return {
        todos,
        isLoading,
        error,
        addTodo: addTodoMutation.mutate,
        addTask: addTaskMutation.mutate,
        deleteTask: deleteTaskMutation.mutate,
        updateTaskStatus: updateTaskStatusMutation.mutate,
    };
};
