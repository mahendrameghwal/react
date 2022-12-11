import { useState } from "react";
import "./App.css";

function State() {
  const [data, setdata] = useState(1);
  function updatedata() {
    setdata(data+1);
  }

  return (
    <div className="state">
      <p>{data}</p>
      <button className="btn" onClick={updatedata}>Click here</button>
    </div>
  );
}

export default State;


// ! State in functional component