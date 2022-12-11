import { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [Selected, setSelected] = useState("");
  const [terms, setterms] = useState(false);

  function getvals(e) {
    e.preventDefault();
    console.log("name is", name);
    console.log("selected value", Selected);
    console.log("acecept terms condition ?", terms);
  }

  return (
    <form className="froms" onSubmit={getvals}>
      <h3>Form handling in react.js</h3>
      <input
        type="text"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <br /> <br />
      <select
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option>select any one</option>
        <option>name</option>
        <option>name2</option>
        <option>name3</option>
      </select>
      <br /> <br />
      <input
        type="checkbox"
        onChange={(e) => {
          setterms(e.target.checked);
        }}
      />
      <span>Accept all terms and condition</span> <br /> <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
