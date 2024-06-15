import { useEffect, useState } from 'react'
import './App.css';
import { GreeterClient } from './hello_grpc_web_pb'
import { empty, Todo, updateTodoParams, deleteTodoParams } from './hello_pb'
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';
const client = new GreeterClient("http://localhost:8080", null, null);
function App() {
  const [todos, settodos] = useState([])
  useEffect(() => {
    client.gettodos(new empty(), null, (err, response) => {
      const todos = response.array[0].map((todoarr) => {
        return {
          id: todoarr[1],
          title: todoarr[0],
          isCompleted: !todoarr[2] ? false : true
        }
      })
      settodos(todos)
    });
  }, [])

  const addTodo = (todoTitle) => {
    const todo = new Todo();
    const id = uuidv4();
    todo.setTitle(todoTitle);
    todo.setId(id)
    client.addTodo(todo, null, (err, response) => {
      if (!err) {
        settodos((prev) => [...prev, { title: todoTitle, id }])
      } else {
        console.log("Error Occurred", err)
      }
    })
  }

  const deleteTodo = (todoid) => {
    const deleteParams = new deleteTodoParams();
    deleteParams.setId(todoid.toString())
    client.deleteTodo(deleteParams, null, (err, response) => {
      if (!err) {
        settodos((prev) => prev.filter((t) => t.id !== todoid))
      } else {
        console.log("Error Occurred", err)
      }
    })
  }

  const updateTodo = (todoid) => {
    const updateParams = new updateTodoParams();
    updateParams.setId(todoid)
    client.updateTodo(updateParams, null, (err, response) => {
      if (!err) {
        settodos((prev) => {
          return prev.map((t)=>(t.id===todoid?({...t,isCompleted:!t.isCompleted}):t))
        })
      } else {
        console.log("Error Occurred", err)
      }
    })
  }

  return (
    <div className="App">
      <div className="container d-flex align-items-center justify-content-center flex-column gap-3 mt-4">
        <TodoForm addTodo={addTodo}></TodoForm>
        <Todos deleteTodo={deleteTodo} updateTodo={updateTodo} todos={todos}></Todos>
      </div>
    </div>
  );
}

export default App;
