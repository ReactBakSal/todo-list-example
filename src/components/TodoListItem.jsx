import React from "react"
import "./TodoListItem.css"

function TodoListItem({ todo }) {
  const { id, content, done } = todo
  return (
    <li className={`TodoListItem ${done ? "checked" : ""}`}>
      <p>{content}</p>
      <span>[X]</span>
    </li>
  )
}

export default TodoListItem
