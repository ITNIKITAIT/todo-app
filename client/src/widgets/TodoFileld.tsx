import TodoCard from '@/components/TodoCard';
import { Todo, TodoCollaborator, useTodos } from '@/hooks/useTodos';
import Button from '@/shared/ui/Button';
import { useState } from 'react';

const TodoField = () => {
    const [newTodo, setNewTodo] = useState('');

    const { isLoading, todos, addTodo } = useTodos();
    if (isLoading) return <div>Loading...</div>;

    const addNewTodo = () => {
        addTodo({ name: newTodo });
        setNewTodo('');
    };

    return (
        <div className="space-y-6 mt-10">
            <section>
                <h2 className="text-4xl font-bold mb-3"> My tasks</h2>
                {todos && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {todos.myTodos.map((todo: Todo) => (
                            <TodoCard key={todo.id} {...todo} />
                        ))}
                    </div>
                )}
                <div className="flex items-center gap-5 mt-5">
                    <input
                        type="text"
                        placeholder="Name"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className="border p-2 rounded-md bg-white w-full"
                    />

                    <Button
                        onClick={addNewTodo}
                        className="bg-black text-white w-[200px] py-2 px-4 hover:bg-black">
                        Add new Todo
                    </Button>
                </div>
            </section>

            <section>
                <h2 className="text-4xl font-bold mb-3">Other tasks</h2>
                {todos && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {todos.collaboratorTodos.map(
                            (todo: TodoCollaborator) => (
                                <TodoCard
                                    role={todo.collaborators[0].role}
                                    key={todo.id}
                                    {...todo}
                                />
                            )
                        )}
                    </div>
                )}
                {todos?.collaboratorTodos &&
                    todos.collaboratorTodos.length === 0 && (
                        <p className="text-gray-500">
                            You do not have collaborator todos
                        </p>
                    )}
            </section>
        </div>
    );
};

export default TodoField;
