import React from "react"
import TodoListItem from "./TodoListItem"
import "./TodoList.css"

function TodoList({ todos }) {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

export default TodoList
