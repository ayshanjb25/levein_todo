import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'

interface TodoFormProps {
    addTodo: (todo:string) =>void
}

const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [mark, setMark] = useState("incomplete");


    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTodo(value)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <TextField
                id="outlined-textarea"
                label="What is the task today?"
                placeholder="Buy bread..."
                multiline
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className='todo-input'
                style={{flex:2}}
            />
             <TextField
                id="outlined-textarea"
                //label="What is the task today?"
                placeholder="Buy bread..."
                multiline
                onChange={(e) => setMark(e.target.value)}
                value={mark}
                className='todo-input'
                style={{flex:2}}
                disabled
                
            />

            <Button type='submit'style={{flex:1, color: "rgba(51, 37, 108)", background: "#ab9ce3", paddingTop:'12px', paddingBottom:'12px'}} >Add task</Button>

        </form>
    )
}

export default TodoForm
