import React from "react";

const FirstQ = () =>{
    const Task = (num:number) =>{
        if(num % 22 === 0){
            console.log("candybar")         
         }else if(num % 11 === 0){
            console.log("bar")
         }else if(num % 2 === 0){
            console.log("candy")
         }else{
            console.log(num)
         }
    }
    return(
        <>
        {Task(44)}
        {Task(55)}
        {Task(8)}
        {Task(6)}
        {Task(3)}
        </>
        
        
    )
    
  
}



export default FirstQ