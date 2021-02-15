import React, {useState} from 'react';
import TodoTable from './TodoTable';
import './App.css';

function App() {

  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) =>{
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () =>{
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }

  const deleteTodo = (row) =>{
    //console.log('Delete row: ' + row);
    setTodos(todos.filter((todo, index) => index !== row));
  }


  return (
    <div className="App">

      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged}></input>
      <input placeholder="Date" name="date" value={todo.date}  onChange={inputChanged}></input>
      <button onClick={addTodo}>Add</button>

      <TodoTable todos={todos} deleteTodo={deleteTodo} />
      {/* <table>
        <tbody>
          {
            todos.map((todo, index) =><tr key={index}><td>{todo.description}</td><td>{todo.date}</td>
            <td><button onClick={()=>deleteTodo(index)}>Delete</button></td></tr>)
          }
        </tbody>
      </table> */}
      
    </div>
  );
}

export default App;
