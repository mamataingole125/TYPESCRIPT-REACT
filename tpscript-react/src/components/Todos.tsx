import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import Headers from './Headers';


export interface ITodoItems{
    id?:number;
    title:string;
    status:boolean;
}

const Todos = () => {
    const [todos,setTodos]=useState<ITodoItems[]>([])

    

    const handleAdd=(title:string)=>{

        const payload={
            title,
            status:false,
          
        }
        // setTodos([...todos,payload]);

        //above can be used if we are not using axios to store
        //in db.json

        axios.post("http://localhost:8080/todos",payload)
      .then(getTodos)
    }

 const getTodos=()=>{
     axios.get("http://localhost:8080/todos")
    //  .then(({data}:{data:ITodoItems[]})=>{
    //      setTodos(data)
    //  });
    //  or
    .then((response:AxiosResponse<ITodoItems[]>)=>{
        const {data}=response
        setTodos(data)
    })

 }

  useEffect(()=>{
       getTodos()
  },[])

  return (
    <div className='todos'>
        <Headers label="Todos" />
        <TodoInput onClick={handleAdd}/>

        {todos.length >0 && todos.map((item)=>(
              <TodoItem key={item.id} {...item}/>
        ))}
    </div>
  )
}

export default Todos