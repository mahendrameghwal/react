import { useState } from "react";
function Statuss() {
  let [data, setsdata] = useState("State stopeed working");
  function mks() {
    setsdata("State working Now");
  }
  return (
    <div className="StateDiv">
      <p>{data}</p>
      <button onClick={mks}>Click to Change State</button>
    </div>
  );
}
export default Statuss;

// ! State in functional component