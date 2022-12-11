import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import State from "./Change";
import reportWebVitals from "./reportWebVitals";
import ChangeText from "./Sentence";
import Statuss from "./Status";
import User from "./ClassState";
import Person from "./Classesincerment";
import Car from "./FavCar";
import Laptops from "./Props";
import Funstate from "./Funcstate";
import Funprops from "./Funprops";
import ShowHide from "./ShowHide";
import Toggle from "./Toggle.";
import ToggleFun from "./ToggleFun";
import Inputval from "./Inputval";
import Form from "./Form";
import ConditionalRender from "./ConditionalRender";
import Validation from "./Validation";
import FunctionProps from "./FunctionProps";

const root = ReactDOM.createRoot(document.getElementById("root"));

function getdata() {
alert("called successfully getdata")
}
root.render(
  <React.StrictMode>
    <App />
    <State />
    <ChangeText />
    <Statuss />
    <User />
    <Person />
    <Car />
    <Laptops statuss={"first"} name={"Lenovo S300  in 2007"} />

    <hr></hr>
    <br></br>
    <Funstate></Funstate>
    <Funprops names={"mahendra solanki is my name from rajsthan"} />
    <ShowHide></ShowHide>
    <Toggle></Toggle>
    <ToggleFun />
    <Inputval />
    <Form />
    <ConditionalRender />
    <Validation />
    <FunctionProps names="mahendra" fullname={"mahendra meghwal"} data={getdata}/>
    <div>
    <button onClick={getdata} >click to call function</button>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
