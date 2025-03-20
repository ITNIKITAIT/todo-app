import TodoCard from '@/components/TodoCard';
import { useTodos } from '@/hooks/useTodos';
import { useState } from 'react';

// interface Todo {
//     id: string;
//     title: string;
//     description?: string;
//     completed: boolean;
//     ownerId: string;
//     collaborators?: string[];
// }

const TodoField = () => {
    const [newTodo, setNewTodo] = useState('');

    const { isLoading, todos, addTodo } = useTodos();
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6 mt-10">
            <section>
                <h2 className="text-4xl font-bold mb-3"> My tasks</h2>
                {todos ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {todos.map((todo) => (
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
                    <button
                        onClick={() => addTodo({ name: newTodo })}
                        className=" bg-black text-white w-[200px] py-2 px-4 cursor-pointer">
                        Add new Todo
                    </button>
                </div>
            </section>

            <section>
                <h2 className="text-4xl font-bold mb-3">Other tasks</h2>
                {/* {todos ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {todos.map((todo) => (
                            <TodoCard key={todo.id} {...todo} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">
                        You don't have tasks
                    </p>
                )} */}
            </section>
        </div>
    );
};

export default TodoField;
