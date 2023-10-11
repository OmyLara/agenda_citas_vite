import { useState } from "react";

const MyButton = () =>{
    const [count,setCount]= useState(0)

    const adding = ()=>{
        count < 10 ? setCount(count + 1): 10;
    }

    const down = ()=>{
        count > 0 ? setCount(count - 1):0;
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={adding}>ADDING + 1</button>
        <button onClick={down}>Going down - 1</button>
        <hr></hr>

        </>
       

    )
}

export default MyButton;