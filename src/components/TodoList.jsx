import React from "react"
import TodoListItem from "./TodoListItem"
import "./TodoList.css"

/**
 * Props Parameter
 * @todos: 부모 컴포넌트에서 받은 todo 리스트
 * @onToggle: (id: number) => void
 * @onRemove: (id: number) => void
 */
function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul className="TodoList">
      {/* todos 배열 개수만큼 반복문 */}
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}

export default TodoList
