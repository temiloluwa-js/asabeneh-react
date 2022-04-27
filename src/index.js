import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class App extends Component {
constructor(){
  super();
  this.state = {val: 0}
  this.update = this.update.bind(this)
}

update(){
  this.setState({val: this.state.val + 1})
}

componentWillMount(){
  console.log('dada')
}

componentDidMount(){
  
}

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
