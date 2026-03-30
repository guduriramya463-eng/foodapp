import React, { useRef, useState } from 'react'

function Addition() {
    //refs to read the input values
    const num1Ref=useRef();
    const num2Ref=useRef();
    const resultRef = useRef();
    const[result,setResult]=useState(null);
    let addLogics=(e)=>{
        e.preventDefault();
        //read the input values::by default String format
        let num1=num1Ref.current.value;
        let num2=num2Ref.current.value;
        //converting String to int format

        let n1=parseInt(num1);
        let n2=parseInt(num2);
        //calculate sum
        const sum=n1+n2;
        //set the result to textbox
       resultRef.current.value = sum;
        //reset the fields
        num1Ref.current.value="";
        num2Ref.current.value="";
    };
  return (
    <div>
      <form onSubmit={addLogics}>
        <input type="number" ref={num1Ref} placeholder="Enter first number"/><br/>
        <input type="number" ref={num2Ref} placeholder="Enter second number"/><br/>
        <button type="submit">Add</button><br/>
        <input type="text" ref={resultRef} placeholder="Result" readOnly /><br/>
      </form>
     
    </div>
  )
}

export default Addition
