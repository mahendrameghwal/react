import React from "react";
import Superchild from "./Superchild";

function FunctionProps({names ,fullname ,data}) {
  return (
    <div className="froms">
      <h2> function send as a props</h2>

      <div>
        <p>sendig function a props parent to child</p>
        <p>{names} <br/>{ fullname}</p>
        <button onClick={data}> click here to call function</button>

      </div>
      <Superchild  datas ={data} />
    </div>
  );
}
export default FunctionProps;
