import React from "react"


export default class DepartmentComponent extends React.Component{


    render(){

        return(

            <div>
                <h2>Department Details</h2>
                <p>
                    <lable>
                        Name:<b>{this.props.Name}</b>
                    </lable>
                </p>
            </div>
        )
    }



}