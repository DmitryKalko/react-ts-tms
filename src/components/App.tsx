import { useState, useEffect, useRef } from "react";

import { ITodo } from "../types/data";

import TodoList from "./TodoList";

const App: React.FC = () => {
	const [value, setValue] = useState<string>("");
	const [todos, setTodos] = useState<ITodo[]>([]);

	const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
		if (value) {
			e.preventDefault();
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value.trim(),
					complete: false,
				},
			]);
			setValue("");
		}
	};

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const deleteTodo = (id: number): void => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const checkTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) {
        return todo
      }
      return {
        ...todo, complete: !todo.complete
      }
    }))
  };

	return (
		<div>
			<form onSubmit={addTodo}>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					ref={inputRef}
				/>
				<button>Добавить</button>
			</form>
			<TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
		</div>
	);
};
export default App;
