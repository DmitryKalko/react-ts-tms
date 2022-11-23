import TodoItem from "./TodoItem";

import { ITodo } from "../types/data";

interface ITodoListProps {
	todos: ITodo[],

  checkTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
}

const TodoList: React.FC<ITodoListProps> = ({ todos, checkTodo, deleteTodo }) => {
	return (
		<>
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
			))}
		</>
	);
};
export default TodoList;
