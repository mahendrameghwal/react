import { useState } from "react";

function ShowHide() {
    const [namess, setnames]= useState(true);

  return (
    
    <div>
    {
 namess ?
        <h1> Toogle in react.js functional component</h1> :<h1></h1>
    }
      <button onClick={()=>setnames(false)}>Hide</button>
      <button onClick={()=>setnames(true)}>Show</button>
    </div>
  );
}
export default ShowHide;
  

// *  show and hide in functional component