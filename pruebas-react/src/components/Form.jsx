import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {

  const [todo, setTodo] = useState({
    todo: "",
    quantity: 0
  })
  const [todos, setTodos] = useState([
    { 
      quantity: 5,
      todo: 'Manzanas'
    },
    { 
      quantity: 6,
      todo: 'Gaseosas'
    },
    {
      quantity: 4,
      todo: 'Detergente'
    },
  ]);

  const handleChange = e => setTodo({
    ...todo,
    [e.target.name]: e.target.value
  });
  const handleClick = e => {
    if (Object.keys(todo).length === 0) {
      alert('el campo no puede estar vacio');
      return
    }
    setTodos([...todos, todo]);
  };

  const deleteTodo = indice => {
    const newTodos = [...todos];
    newTodos.splice(indice, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label>Agregar tarea</label>
        <input type="text" name="todo" onChange={handleChange} value={todo.todo} />
        <input type="text" name="quantity" onChange={handleChange} value={todo.quantity} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {
        todos.map((value, index) => (
          <Todo todo={value.todo} quantity={value.quantity} key={index} index={index} deleteTodo={deleteTodo} />
        ))
      }
    </>
  )
}

export default Form;
