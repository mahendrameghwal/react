import { useState } from "react";

function Funstate() {
  const [names, seename] = useState("MAHI");
  function mks() {
    seename("MAHENDRA");
  }
  return (
    <div>
      <h4>{names}</h4>
      <button onClick={mks}>click to see my full name</button>
    </div>
  );
}

export default Funstate;



//* !  change state in functional component  
