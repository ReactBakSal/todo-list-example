import React, { useState, useCallback, useRef } from "react"
import "./App.css"
import TodoForm from "./components/TodoForm"

/**
 * 최상위 컴포넌트 App에서 모든 데이터를 핸들링합니다. (state 관리)
 * 해당 State의 변경이 되는 작업(onInsert 추가, onToggle 변경, onRemove 제거)의 구현체는
 * 반드시 state가 선언된 컴포넌트 안에 작성되어있어야 합니다.
 */
function App() {
  // todo State
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

  // 새로 추가되는 todo에 유니크한 number를 부여해줍니다.
  const nextId = useRef(4)

  // 새로운 todo를 setTodos를 이용하여 넣어줍니다.
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

  // done Toggle [Array.map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      )
    },
    [todos]
  )

  // [Array.filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id))
    },
    [todos]
  )

  return (
    <TodoForm
      todos={todos}
      onInsert={onInsert}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  )
}

export default App
