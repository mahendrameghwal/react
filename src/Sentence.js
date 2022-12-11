import { useState } from "react";
import "./App.css";

function ChangeText() {
  const [data, setdata] = useState(" stopped");
  function updatedata() {
    setdata("working");
  }

  return (
    <div className="state">
      <p> Status {data}</p>
      <button className="btn" onClick={updatedata}>Click here</button>
    </div>
  );
}

export default ChangeText;

// ! State in functional component
