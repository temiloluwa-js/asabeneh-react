import { Component } from "react";
import ClickCounter from "./ClickCounter.js";
import HoverCounter from "./HoverCounter.js";

class App extends Component{
    render(){
        return(
            <div className="App">
                <ClickCounter/>
                <HoverCounter/>
            </div>
        )
    }
}

export default App