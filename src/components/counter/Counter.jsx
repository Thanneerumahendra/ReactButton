import React from "react";
import {useState} from "react"
import "./Counter.css"

function Counter(){
    const [count, setCount]=useState(0);
    function insC(){
        setCount(count+1);
    }
    return(<div id="container">
        <h1> count will be:{count}</h1>
        <button onClick={insC}>click me..</button>
    </div>)
    }
export default Counter;