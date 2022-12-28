import React from "react";
import DepartmentComponent from "./DepartmentComponent";


export default class EmployeeComponent extends React.Component{
   //this.props is automatically getting created for us
   // constructor(props){
    //    super(props);
    //    console.log(props);
    //}

    //props are read-only

    render(){

        return(

            <div>
                <h2>Employee Details</h2>
                <p>
                    <lable>Name:  <b>{this.props.Name}</b></lable>
                </p>
                <DepartmentComponent Name={this.props.Department}></DepartmentComponent>
            </div>
        )



    }
}