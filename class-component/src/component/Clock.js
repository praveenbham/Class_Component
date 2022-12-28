import React from "react";




export default class Clock extends React.Component{
    interval=null
    constructor(props){
        super(props);
        console.log("Constructor called")
        this.state={
            date:new Date()
        }
    }
    render(){
        //console.log("Render function called")
        return(

            <h1>{this.state.date.toLocaleTimeString()}</h1>
        )
    }

    componentDidMount(){
        
        console.log("ComponentDidMount called");
        const oneSecond=1000;
        this.interval =setInterval(()=>{
            console.log("interval")
            this.setState({date:new Date()})
        },oneSecond);
    }

    componentDidUpdate(prevProps,prevState){

        //console.log('prev', prevState);
        //  console.log('current',this.state);
    }

    componentWillUnmount(){

        console.log("Component unmount called");
        clearInterval(this.interval);
    }

}