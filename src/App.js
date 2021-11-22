import React, { useState } from 'react';
import './App.css';

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

  function addRemove (index)  {
    const removable = index;
    setTodos(todos.filter((todo, number) => number !== removable));
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

      <table>
        <tbody>
          {todos.map((todo, index) => <tr key={index}>
            <td>{todo.desc}</td>
            <td>{todo.date}<button onClick={() => addRemove(index)}>Remove</button></td>
            </tr>)}
        </tbody>
      </table>
      

    </div>
  );
}

export default App;
