import React, { useState } from 'react';
import './App.css';
import Todotable from './components/Todolist'

function App() {
  const [todo, setTodo] = useState({desc:'', date:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  


  return (
    <div className="App">

      <h1>To Do List</h1>

      <form onSubmit={addTodo}>
		    <label>Date: </label>
        <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
		    <label> Description: </label>
        <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        <input type="submit" value="Add"/>
      </form>

      <Todotable todos={todos} todo={todo} setTodos={setTodos} />
      

    </div>
  );
}

export default App;
