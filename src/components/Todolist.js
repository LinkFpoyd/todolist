import React from 'react';

export default function Todolist(props) {

  const addRemove = (index) =>  {
    const removable = index;
    props.setTodos(props.todos.filter((todo, number) => number !== removable));
  }

  
  return(
    <div>
      <table>
        <tbody>
          <tr><th>Description</th><th >Date</ th></tr>
          {props.todos.map((todo, index) => <tr key={index}>
            <td>{todo.desc}</td>
            <td>{todo.date}<button onClick={() => addRemove(index)}>Remove</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}