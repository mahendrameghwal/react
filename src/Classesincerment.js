import React,{Component} from "react";



class  Person extends Component{


  constructor (){
    super();
    this.state ={
        data:1
    }
  }

//*  we can also do this

// mks(){
// this.setState({data:this.state.data+1})
// }

    render(){
        return(
            <div className="Statess">
             <p>practice of class  state  by mahendra </p>
             <p>{this.state.data}</p>
             <button onClick={()=>this.mks( this.setState({data:this.state.data+1}))} className="clsbtn"> click Here</button>
            </div>
        )
    }
}
export  default Person;

//!  change  state in class  component
