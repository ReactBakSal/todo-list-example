import React, { useState } from "react"
import TodoList from "./TodoList"
import "./TodoForm.css"

/**
 * Props Parameter
 * @todos: 부모 컴포넌트에서 받은 todo 리스트
 * @onInsert: (content: string) => void
 * @onToggle: (id: number) => void
 * @onRemove: (id: number) => void
 */
function TodoForm({ todos, onInsert, onToggle, onRemove }) {
  const [value, setValue] = useState("")
  const onSubmit = e => {
    e.preventDefault() //홈페이지 새로고침 방지
    onInsert(value) //상위 콜백 실행
    setValue("") //input 다시 비워줌
  }
  return (
    <div className="TodoForm">
      {/* input에서 엔터를 치면 form DOM의 onSubmit 이벤트가 실행된다. */}
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
