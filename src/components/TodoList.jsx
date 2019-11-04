import React from "react"
import TodoListItem from "./TodoListItem"
import "./TodoList.css"

function TodoList() {
  return (
    <ul>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  )
}

export default TodoList
