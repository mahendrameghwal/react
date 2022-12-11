import { useState } from "react";
import User from "./ClassState";

function Validation() {
  const [user, setuser] = useState("");
  const [usererr, setusererr] = useState(false);
  const [passwords, setpasswords] = useState("");
  const [passwordserr, setpasswordserr] = useState(false);

  function userchecker(e) {
    const inputval = e.target.value;
    console.log(inputval.length);

    inputval.length < 3 ? setusererr(true) : setusererr(false);

    setuser(inputval);
  }

  function passwordchecker(e) {
    const passwords = e.target.value;
    console.log(passwords.length);

    passwords.length < 5 ? setpasswordserr(true) : setpasswordserr(false);

    setpasswords(passwords);
  }

  function formhandler(e) {
    e.preventDefault();

    user.length < 3 || passwords.length < 5
      ? alert("error found")
      : alert("successfully done");
  }

  return (
    <form className="froms" onSubmit={formhandler}>
      <h4> form Validation</h4>
      <input onChange={userchecker} placeholder="enter username" type="text" /> <br />
      {usererr ? <span className="username">enter valid username..</span> : ""}
      <br />
      <br />
      <input
        onChange={passwordchecker}
        placeholder="enter password"
        type="password"
      />{" "}
      <br />
      {passwordserr ? (
        <span className="username">password length must be 5 character.</span>
      ) : (
        ""
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Validation;
