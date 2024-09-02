import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';


interface Task {
  id:string,
  task:string,
  //completed:boolean
  completed:string
}

interface TodoCardProps{
  task:Task,
  toggleComplete: (id: string) =>void
  deleteTodo: (id: string) =>void
  editTodo: (id: string) =>void
}

export default function TodoCard({task, toggleComplete, deleteTodo, editTodo} :TodoCardProps) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', width:'100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', padding:'10px', justifyContent:'space-between'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" onClick={()=>toggleComplete(task.id)} className={`${task.completed === 'complete' ? 'complete' : 'incomplete'}`}>
            {task.task}
          </Typography>
          <Typography component="div" variant="h5" style={{fontSize:'15px'}}>
            {task.completed}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, gap:'5px'}}>
          
          <Button style={{background:'#ab9ce3', color: "rgba(51, 37, 108)"}}>
            <EditNoteIcon sx={{ height: 38, width: 38 }} onClick={()=>editTodo(task.id)}/>
          </Button>

          <Button style={{background:'#ab9ce3', color: "rgba(51, 37, 108)"}} >
            <DeleteForeverIcon sx={{ height: 38, width: 38 }} onClick={()=>deleteTodo(task.id)}/>
          </Button>
          
        </Box>
      </Box>
     
    </Card>
  );
}
