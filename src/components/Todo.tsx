import React from 'react'
import TodoCard from './TodoCard'

interface Task {
  id:string,
  task:string,
  // completed:boolean
  completed:string

}

interface TodoProps{
  task:Task,
  toggleComplete: (id: string) =>void
  deleteTodo: (id: string) =>void
  editTodo: (id: string) =>void
}

const Todo = ({task, toggleComplete, deleteTodo, editTodo} :TodoProps) => {
  return (
    <div style={{ width:'400px'}}>
        <TodoCard task={task} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
      
    </div>
  )
}

export default Todo
