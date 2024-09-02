import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const Counter: React.FC = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }


    return (
        <div className='todo-form' >
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '20px' }}>

                <h1 style={{ color: 'white', textAlign: 'center' }}>Counter</h1>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button type='submit' style={{ flex: 1, color: "rgba(51, 37, 108)", background: "#ab9ce3", paddingTop: '12px', paddingBottom: '12px' }} onClick={handleDecrement}><RemoveIcon /></Button>
                    <p style={{ fontSize: '1.5rem', paddingLeft: '50px', paddingRight: '50px', color: "white" }}>{counter}</p>
                    <Button type='submit' style={{ flex: 1, color: "rgba(51, 37, 108)", background: "#ab9ce3", paddingTop: '12px', paddingBottom: '12px' }} onClick={handleIncrement}><AddIcon /></Button>
                </div>  </div></div>
    )
}

export default Counter
