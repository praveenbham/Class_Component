import React from "react";



export default class Toggle extends React.Component{
    green = "#39D1B4";
    yellow ="#FFD712";
    constructor(props){
        super(props);
        this.state={
            color:this.green
        }
    }


    changeColor=()=>{
        this.setState({color:this.yellow});
    }
 
    render(){

        return(

            <div>
                <div style={{background:this.state.color}}>
                    Change my color
                </div>
                <button onClick={this.changeColor}>Click Me</button>
            </div>
        )
    }

}