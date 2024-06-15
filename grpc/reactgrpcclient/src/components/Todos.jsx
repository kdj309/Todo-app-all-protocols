import React from 'react'
import Todo from './Todo'

export default function Todos({ todos, updateTodo, deleteTodo }) {
    return (
        <div className="todo-container">
            <ul className="list-group" id="todo-container_wrapper">
                {todos.map((item) => <Todo key={item.id} item={item} buttonHandler={deleteTodo} checkBoxHandler={updateTodo}></Todo>)}
            </ul>
        </div>
    )
}
