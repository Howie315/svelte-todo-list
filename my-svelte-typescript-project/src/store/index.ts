import { writable } from "svelte/store";

interface Todo {
	id: number;
	name: string;
	completed: boolean;
}

const createTodoStore = () => {
	const { subscribe, update } = writable<Todo[]>([]);

	return {
		subscribe,
		addTodo: (name: string) =>
			update((todos) => [...todos, { id: Date.now(), name, completed: false }]),
		deleteTodo: (id: number) =>
			update((todos) => todos.filter((todo) => todo.id !== id)),
		toggleTodo: (id: number) =>
			update((todos) => {
				return todos.map((todo) =>
					todo.id === id ? { ...todo, completed: !todo.completed } : todo,
				);
			}),
		rearrangeTodo: (newTodos: Todo[]) =>
			update(() => {
				return newTodos;
			}),
	};
};

export const todos = createTodoStore();
