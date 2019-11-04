import React, { useState } from "react"
import TodoList from "./TodoList"
import "./TodoForm.css"

function TodoForm({ todos, onInsert, onToggle, onRemove }) {
  const [value, setValue] = useState("")
  const onSubmit = e => {
    e.preventDefault()
    onInsert(value)
    setValue("")
  }
  return (
    <div className="TodoForm">
      <form onSubmit={onSubmit}>
        <h1>Todo List</h1>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </form>
    </div>
  )
}

export default TodoForm
