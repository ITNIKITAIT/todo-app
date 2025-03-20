import TodoCard from '@/components/TodoCard';
import { Todo, TodoCollaborator, USER_ROLE, useTodos } from '@/hooks/useTodos';
import Button from '@/shared/ui/Button';
import { useState } from 'react';

const TodoField = () => {
    const [newTodo, setNewTodo] = useState('');

    const { isLoading, todos, addTodo } = useTodos();
    if (isLoading) return <div>Loading...</div>;
    const { myTodos, collaboratorTodos } = todos;

    return (
        <div className="space-y-6 mt-10">
            <section>
                <h2 className="text-4xl font-bold mb-3"> My tasks</h2>
                {myTodos ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {myTodos.map((todo: Todo) => (
                            <TodoCard key={todo.id} {...todo} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">You don't have tasks</p>
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
                        onClick={() => addTodo({ name: newTodo })}
                        className="bg-black text-white w-[200px] py-2 px-4 hover:bg-black">
                        Add new Todo
                    </Button>
                </div>
            </section>

            <section>
                <h2 className="text-4xl font-bold mb-3">Other tasks</h2>
                {collaboratorTodos ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {collaboratorTodos.map((todo: TodoCollaborator) => (
                            <TodoCard
                                role={todo.collaborators[0].role as USER_ROLE}
                                key={todo.id}
                                {...todo}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">You don't have tasks</p>
                )}
            </section>
        </div>
    );
};

export default TodoField;
