import React,{Component} from "react";

class Car extends Component{
   constructor(){
    super();
    this.state ={
        Carname:"Audi",
        Modal:"1998",
        Num: "CG 12 005"
    }
   }
   changer(){
    {
        this.setState({
            Carname:"Ferrari",
            Modal:"2022",
            Num: "DL 12 2000"
        })
    }
   }

    render(){
        return(
            <div className="favCar">
            <h4>favourite Car using  State Class component</h4>
            <p>Do you Now my FavCar</p>
            <p>my favCar is {this.state.Carname} Modal of {this.state.Modal} car Number {this.state.Num}</p>
          <button onClick={()=>{this.changer()}}> Show My new favourite</button>
            </div>
        )
    }
}

export default Car;