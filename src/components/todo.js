import React, { useState } from 'react';
import Logout from '../Logout'; 
import { useHistory } from 'react-router-dom';
import './todo.css'; // Import the updated CSS

const Todo = () => {
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleLogout = () => {
    history.push('/login');
  };

  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleEditTodo = (index) => {
    setIsEditing(index);
    setEditValue(todos[index].text);
  };

  const handleUpdateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = editValue;
    setTodos(newTodos);
    setIsEditing(null);
  };

  const handleMarkTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      
      <h2>Your Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => handleUpdateTodo(index)}>Update</button>
              </>
            ) : (
              <>
                <span className="todo-text">{todo.text}</span>
                <div className="todo-buttons">
                  <button class="edit" onClick={() => handleEditTodo(index)}>Edit</button>
                  <button class="mark" onClick={() => handleMarkTodo(index)}>Mark</button>
                  <button class="del" onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Todo;
