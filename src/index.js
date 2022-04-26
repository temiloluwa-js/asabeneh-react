import React from "react";
import ReactDOM from "react-dom/client";

class TechList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const techs = ["HTML", "CSS", "JavaScript"];
    const techsformatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsformatted
  }
}

class Main extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    <div className="main-wrapper">
      <ul>
        <TechList/>
      </ul>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
