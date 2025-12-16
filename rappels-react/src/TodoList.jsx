import { memo, useState } from "react";

function TodoList() {
    console.log('Render TodoList');

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Profit!', completed: false },
    { id: 4, text: 'Review Code', completed: false },
  ]);

  const handleDelete = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoText = e.target.elements[0].value;
    if (newTodoText.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    e.target.reset();
  }

  return (
    <div className="TodoList">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Add a new todo..." />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {/* <input type="checkbox" checked={todo.completed} /> */}
            {todo.text}
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(TodoList);
