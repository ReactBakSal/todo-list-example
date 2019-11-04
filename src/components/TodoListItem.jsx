import React from "react"
import "./TodoListItem.css"

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, content, done } = todo

  return (
    <li className={`TodoListItem ${done ? "checked" : ""}`}>
      <p onClick={() => onToggle(id)}>{content}</p>
      <span onClick={() => onRemove(id)}>[X]</span>
    </li>
  )
}

export default TodoListItem
