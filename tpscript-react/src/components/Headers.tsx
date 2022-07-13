import React from 'react'

interface IHeadersProps{

    label?:string;
    children?:JSX.Element | JSX.Element[];

}

const Headers = ({label="counter",children}:IHeadersProps) => {
  
    return (
  <>
  
  <h1>{label}</h1>
  {children}
  </>

    )
}


//instead of using protypes here  we are using interface or type


export default Headers