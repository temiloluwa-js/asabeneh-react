import React from "react"
import UpdatedComponent from "./withCounter"

class ClickCounter extends React.Component{
    render(){
        return(
            <div className="app">
                <button>Clicked X times{this.props.name}</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)