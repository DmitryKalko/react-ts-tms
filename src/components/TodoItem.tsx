import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  checkTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
}

const TodoItem: React.FC<ITodoItem> = ({ id, title, complete, deleteTodo, checkTodo }) => {
	return (
		<>
			<input type='checkbox' checked={complete} onChange={() => checkTodo(id)}/>
      <span>{title}</span>
      <button onClick={() => deleteTodo(id)}>Удалить</button>
		</>
	);
};
export default TodoItem;
