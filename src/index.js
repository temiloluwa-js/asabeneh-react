import React from "react";
import ReactDOM from "react-dom/client";
class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <header>
        <div className="header-wrapper">
          <h1>{this.props.data.welcome}</h1>
          <h2>{this.props.data.title}</h2>
          <h3>{this.props.data.author.firstName} {this.props.data.author.lastName}</h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
    )
  }

}

const App = () => {
  const data = {
   welcome: 'Welcome to learning JS',
   title: 'Getting Started React',
   subtitle: 'JavaScript Library',
   author: {
     firstName: 'Asabeneh',
     lastName: 'Yetayeh'
   },
   date: 'Oct 7, 2020'
  }

  return(
    <div className="app">
      <Header data={data}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
