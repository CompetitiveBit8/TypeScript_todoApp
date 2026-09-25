import React, { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'
import type { Todo } from './model'
import TodoList from './Components/TodoList'
import { DragDropProvider } from '@dnd-kit/react'

const App: React.FC = () => {
  const [todo, setTodo] = useState <string> ("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.SubmitEvent) => {
    e.preventDefault();
    
    if (todos){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  console.log(todos)
  return (
  <DragDropProvider>
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        />
    </div>
  </DragDropProvider>
  )
}

export default App
