import React from 'react'

interface IButtonProp {
    label:string,
    handleClick:()=>void
}


const Button = (props:IButtonProp) => {
    const {label,handleClick}=props
    
  return <button className='btn' onClick={handleClick}>{label}</button>
}

export default Button