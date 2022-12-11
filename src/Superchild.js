import React from "react";

function Superchild({ datas }) {
  return (
    <div className="froms">
      <h2>super chhild</h2>
      <button onClick={datas}>call super child</button>
    </div>
  );
}

export default Superchild;
