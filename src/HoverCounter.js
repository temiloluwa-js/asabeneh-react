import React, {Component} from "react";
import UpdatedComponent from "./WithCounter";

class HoverCounter extends Component{


    
    render(){
        const {count} = this.state
        return(
            <div>
                <h2 onMouseOver={this.incrementCount}>{this.prop}Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)