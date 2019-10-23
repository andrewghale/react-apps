import React, { useState } from 'react';
import uuid4 from "uuid4";

function ToDos() {
    const [todos, setTodos] = useState([
        {
            id: uuid4(),
            todos: 'One'
        },
        {
            id: uuid4(),
            todos: 'Two'
        },
        {
            id: uuid4(),
            todos: 'Three'
        }
    ])

    const [todoInput, settodoInput] = useState('');

    function handleSubmit(e) {
        // Stop form from submitting
        e.preventDefault();
        setTodos([
          ...todos, {
            id: uuid4(),
            todos: todoInput
          }
        ])
        settodoInput('');
      }

      function handleChange(e) {
        settodoInput(e.target.value);
        console.log(e.target.value);
      }

      function handleRemove(id) {
        setTodos(todos.filter((todos) => todos.id !== id));
      }

      const test = uuid4();
      console.log(test);

    return (
    <div className="todolist">
      <h1>To-Do List</h1>
      <h3>Things to do</h3>
      <p className="explanation">Click on an item to remove it</p>
      { todos.map(({ id, todos }) => (
        <p onClick={() => handleRemove(id)} key={id}>{todos}</p>
      )) }
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Add To-Do:
            <input type="text" onChange={handleChange} value={todoInput} />
          </label>
          <button>Add</button>
        </form>
      </div>
    </div>
    );
}

export default ToDos;