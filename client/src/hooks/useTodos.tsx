'use client';
import { api } from '@/app/api';
import { handleError } from '@/utils/handleError';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const TODO_ROUTE = '/todos';
const TASK_ROUTE = '/tasks';

export enum USER_ROLE {
    VIEWER = 'VIEWER',
    ADMIN = 'ADMIN',
}

interface Task {
    id: string;
    title: string;
    description: string;
    status: boolean;
    listId: string;
}

export interface Todo {
    id: string;
    name: string;
    ownerId: string;
    tasks: Task[];
}
export interface TodoCollaborator {
    id: string;
    name: string;
    ownerId: string;
    tasks: Task[];
    collaborators: [
        {
            role: USER_ROLE;
        }
    ];
}

interface TodosResponse {
    myTodos: Todo[];
    collaboratorTodos: TodoCollaborator[];
}

const TodosResponseDeafaultValue = {
    myTodos: [],
    collaboratorTodos: [],
};

const fetchTodos = async (): Promise<TodosResponse> => {
    try {
        const response = await api.get<TodosResponse>(TODO_ROUTE, {
            withCredentials: true,
        });
        return response.data ?? TodosResponseDeafaultValue;
    } catch (error) {
        handleError(error);
        return TodosResponseDeafaultValue;
    }
};

const addTodo = async (newTodo: Pick<Todo, 'name'>) => {
    try {
        const response = await api.post<Task>(TODO_ROUTE, newTodo, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const deleteTodo = async (id: string) => {
    try {
        const response = await api.delete<void>(`${TODO_ROUTE}/${id}`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const addTask = async (newTask: Omit<Task, 'id'>) => {
    try {
        const response = await api.post<Task>(TASK_ROUTE, newTask, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const deleteTask = async (taskId: string) => {
    try {
        await api.delete(`${TASK_ROUTE}/${taskId}`, {
            withCredentials: true,
        });
    } catch (error) {
        handleError(error);
    }
};

const updateTask = async ({
    taskId,
    status,
}: {
    taskId: string;
    status: boolean;
}) => {
    try {
        await api.patch(
            `${TASK_ROUTE}/${taskId}/status`,
            { status },
            { withCredentials: true }
        );
    } catch (error) {
        handleError(error);
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
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const deleteTodoMutation = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const addTaskMutation = useMutation({
        mutationFn: addTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const deleteTaskMutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const updateTaskStatusMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    return {
        todos,
        isLoading,
        error,
        deleteTodo: deleteTodoMutation.mutate,
        addTodo: addTodoMutation.mutate,
        addTask: addTaskMutation.mutate,
        deleteTask: deleteTaskMutation.mutate,
        updateTaskStatus: updateTaskStatusMutation.mutate,
    };
};
