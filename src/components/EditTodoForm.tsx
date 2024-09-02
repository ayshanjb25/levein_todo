import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'

interface EditTodoFormProps {
    editTodo: (id: string, todo:string) =>void,
    task:{
        id:string,
        task:string,
    }
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        editTodo(task.id,value)
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

        <Button type='submit'style={{flex:1, color: "rgba(51, 37, 108)", background: "#ab9ce3", paddingTop:'12px', paddingBottom:'12px'}} >Edit task</Button>

    </form>
    )
}


export default EditTodoForm
