import React, { useState } from 'react';
import './App.css';

function App() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }

  function addRemove (index)  {
    const removable = index;
    setTodos(todos.filter((todo, number) => number !== removable));
  }


  


  return (
    <div className="App">

      <form onSubmit={addTodo}>
        <input type="text" onChange={inputChanged} value={desc}/>
        <input type="submit" value="Add"/>
      </form>

      <table>
        <tbody>
          {todos.map((todo, index) => <tr key={index}>
            <td>{todo} <button onClick={() => addRemove(index)}>Remove</button></td>
            </tr>)}
        </tbody>
      </table>
      

    </div>
  );
}

export default App;
