import React from "react"
import "./TodoListItem.css"

/**
 * Props Parameter
 * @todo: {id: number, content: string, done: boolean}부모 컴포넌트에서 받은 todo 객체
 * @onToggle: (id: number) => void
 * @onRemove: (id: number) => void
 */
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
