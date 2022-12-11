import { useState } from "react";

function Inputval() {
  const [data, setdata] = useState(null);
  const [prints, printdata] = useState(false);
  
  function changes(val){
    setdata(val.target.value)
    printdata(false)
  }


  return (
    <div className="inputs">
    {prints ?<p>{data}</p> :null}
      <input onChange={changes} type="text" />
      <button onClick={()=>printdata(true)}>Print</button>
    </div>
  );
}

export default Inputval;
