import { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends Component{
constructor(props){
    super(props)

    this.state = {
        count: 0
    }
}

incrementCount = () => {
    this.setState({count: this.state.count + 1})
}


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