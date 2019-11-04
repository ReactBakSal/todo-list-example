import React from "react"
import TodoInsert from "./TodoInsert"
import TodoList from "./TodoList"
import "./TodoForm.css"

function TodoForm() {
  return (
    <div className="container">
      <form>
        <h1>Todo List</h1>
        <TodoInsert />
        <TodoList />
      </form>
    </div>
  )
}

export default TodoForm
