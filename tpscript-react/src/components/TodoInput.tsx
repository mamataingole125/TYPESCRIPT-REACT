import React, { useState } from 'react'


interface ITodoinputProps {
    onClick:(value:string) => void;
}

const TodoInput = ({onClick}:ITodoinputProps) => {

    const [text,setText]=useState<string>("")

    const changeHandler:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    setText(e.target.value)
    }
   
const handleAdd:React.MouseEventHandler<HTMLButtonElement>=()=>{
    if(text === ""){
        return ;
    }
    else{
          onClick(text)
    }
  
}

  return (
    <div >
        <input type="text" 
        value={text}
        className='input'
        onChange={changeHandler}
        />
        <button className='inputbtn' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput