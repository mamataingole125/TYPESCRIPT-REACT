import React, { useState } from 'react'
import Button from './Button'
import Headers from './Headers'

const Counter = () => {
    const [count,setCount]=useState(0)

    const handleClick=(value:number)=>{
    setCount(count+value)
    }
    
  return (
    <div className='counter'>
        <Headers>
            <div>Child counter header</div>
            <div>Child counter header</div>
            <div>Child counter header</div>
        </Headers>
        <Headers label="Counter"/>
        <Headers label={`${count}`}/>
        <Button  label="Add" handleClick={()=>handleClick(1)}/>
        <Button  label="Reduce" handleClick={()=>handleClick(-1)}/>
    </div>
  )
}

export default Counter