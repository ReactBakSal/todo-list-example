import React, { useState, useCallback, useRef } from "react"
import "./App.css"
import TodoForm from "./components/TodoForm"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "리액트 마스터하기",
      done: true
    },
    {
      id: 2,
      content: "컴포넌트 마스터하기",
      done: false
    },
    {
      id: 3,
      content: "Hook 마스터하기",
      done: false
    }
  ])

  const nextId = useRef(4)

  const onInsert = useCallback(
    content => {
      const newTodo = {
        id: nextId.current++,
        content,
        done: false
      }
      setTodos(todos.concat(newTodo))
    },
    [todos]
  )
  return <TodoForm todos={todos} onInsert={onInsert} />
}

export default App
