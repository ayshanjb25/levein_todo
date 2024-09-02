import React, { useState, useMemo } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Counter from './Counter'
uuidv4()

interface TodoProps {
  id: string,
  task: string,
  // completed: boolean,
  completed: string,
  isEditing: boolean,

}


const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [search, setSearch] = useState('');
  const [selectedTodo, setSelectedTodo] = useState('');

  const addTodo = (todo: string) => {
    setTodos([
      // ...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }
      ...todos, { id: uuidv4(), task: todo, completed: 'incomplete', isEditing: false }
    ])

    console.log(todos)
  }

  const toggleComplete = (id: string) => {
    // setTodos(todos.map((todo: any) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setTodos(todos.map((todo: any) => todo.id === id ? { ...todo, completed: 'complete' } : { ...todo, completed: 'incomplete' }))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo: any) => todo.id !== id))
  }

  const editTodo = (id: string) => {
    setTodos(todos.map((todo: any) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  const editTask = (id: string, newTask: string) => {
    setTodos(todos.map((todo: any) => todo.id === id ? { ...todo, task: newTask, isEditing: !todo.isEditing } : todo))
  }

  const filteredTodos = todos.filter((todo) => {
    if (selectedTodo !== "") {
      const match = todo.id == selectedTodo; 
      return match;
    }
    return true; // If no brand is selected, return all fragrance products
  });
 

  const handleChangeTodo = (event:any) => {
    const selectedTodo = event.target.value;
    setSelectedTodo(selectedTodo);
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

      <div className='todo-wrapper'>


        <Counter />
      </div>
      <div className='todo-wrapper'>
        <h1 style={{ color: 'white' }}>Get stuff done!</h1>
        <TodoForm addTodo={addTodo} />

        <FormControl variant="outlined" style={{ minWidth: 200, marginRight: "10px" }}>
        <InputLabel id="brand-filter-label">Todo Status</InputLabel>
        <Select
          labelId="brand-filter-label"
          id="brand-filter"
          value={selectedTodo}
          onChange={handleChangeTodo}
          label="Todo Status"
        >
          <MenuItem value="">All Todos</MenuItem>
          <MenuItem value="incomplete">Completed Todos</MenuItem>
          <MenuItem value="complete">Not completed Todos</MenuItem>
          {/* {Object.entries(todos).map((todo) => (
            <MenuItem key={todo.id} value={todo.completed}>
              {todo.completed}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
</div>
        {/* <input onChange={(e:any) => setSearchTodo(e.target.value)} /> */}

        {/* {todos.filter(todo => todo.completed === true).map((todo)=> todo.isEditing ? (<EditTodoForm key={todo.id} task={todo} editTodo={editTask}/>): ( */}
        {filteredTodos.map((todo) => todo.isEditing ? (<EditTodoForm key={todo.id} task={todo} editTodo={editTask} />) : (
          <Todo key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}


      </div>



  )
}

export default TodoWrapper
