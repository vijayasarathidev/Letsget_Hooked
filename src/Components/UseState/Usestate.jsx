import React from "react";
import { useState } from "react";
import style from "./Usestate.module.css"

function Counter(){

    const [Count,setCount] = useState(0);
    //function to increase the value
    function increment(){
        setCount(Count + 1);
    }
    // function to decrease the value
    function decrement (){
        setCount(Count -1);
    }

    return(
        <div>
        <div className={style.container}>
         <h1>Counter</h1>
         <h2>{Count}</h2>
         <button className={style.increase} onClick={increment}>Increase</button>
         <button className={style.decrease} onClick={decrement}>Decrease</button>
        </div>
        <div className={style.cardcontainer}>
        <div className={style.card1}>
         <h1>useState - Definition</h1>
         <p>useState in React allows to add state variable to our react component. It commonly use manange state within the component</p>
        </div>
        <div className={style.card1}>
         <h1>Counter - example</h1>
         <p>The counter app utilizes the useState hook in React to create a simple counter with increment and decrement functionality.</p>
        </div>
        </div>
        </div>
    );
}

export default Counter;