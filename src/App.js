import { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class App extends Component{
    render(){
        return(
            <div className="App">
                {/* <ClickCounter/> */}
                <HoverCounter/>
            </div>
        )
    }
}

export default App