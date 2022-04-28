import React from "react"
import UpdatedComponent from "./withCounter"

class ClickCounter extends React.Component{
    render(){
        const {count, incrementCount} = this.props
        
        return(
            <div className="app">
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)