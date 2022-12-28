import EmployeeComponent from "./component/EmployeeComponent";
import Clock from "./component/Clock";
import ExampleStateComponent from "./component/ExampleStateComponent";
import Toggle from "./component/Toggle";
import React from "react";




export default class App extends React.Component{
    state={
        clockVisible:true
    }
   render(){
        if(this.state.clockVisible){
             return(

                //<EmployeeComponent Name="Praveen Mishra" Department="FrontEnd Developer"> </EmployeeComponent> 
                //<ExampleStateComponent></ExampleStateComponent>
                //<Toggle></Toggle>
                <Clock></Clock>
            )
        }
        else{
            return(
                <h1>Clock is not Visible</h1>
            )
        }

            
       
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({clockVisible:false});
        },4000);
    } 
}    