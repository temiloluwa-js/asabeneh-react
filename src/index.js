import React from "react";
import ReactDOM from "react-dom/client";

class TechList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsformatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsformatted
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
