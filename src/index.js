import React from "react";
import ReactDOM from "react-dom/client";

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>Class components</h1>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
