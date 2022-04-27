import { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends Component{

    render(){
        const {count} = this.state
        return(
            <div>
                <button onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)