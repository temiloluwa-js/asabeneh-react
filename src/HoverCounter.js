import React from "react"
import UpdatedComponent from "./withCounter"

class HoverCounter extends React.Component{
    render(){
        const {count, incrementCount} = this.props
        
        return(
            <div className="hover">
                <p onMouseOver={incrementCount}>Hovered {count} times</p>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)