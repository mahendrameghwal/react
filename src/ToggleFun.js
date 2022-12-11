import { useState } from "react";

function ToggleFun() {
  const [datas, setdata] = useState(true);


  function toggleval(){
    setdata (!datas)
  }

  return (
    <div>
      {datas ? <h1>updated functional component Toggle</h1> : null}

      <button onClick={toggleval}>change </button>
    </div>
  );
}

export default ToggleFun;

// ! toggle use functional component
