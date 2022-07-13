import React from 'react'
import {ITodoItems} from "./Todos"

const TodoItem = ({id,title,status}:ITodoItems) => {
  return (
    <div className='data'>

        <span>{`${title} ${"  "}` }</span>
        <span>{`${id}-${status}`}</span>
    </div>
  )
}

export default TodoItem