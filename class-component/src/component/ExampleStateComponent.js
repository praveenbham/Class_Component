import {Component} from "react";



export default class ExampleStateComponent extends Component{
    state={
        number:1,
        name:"Shubham"
    };
    
    render(){
        //let number=1;
        setTimeout(()=>{
            this.setState({number:2});
        },2000)

        return(<div> <h1>{this.state.name} {this.state.number}</h1> </div>)
    }

}