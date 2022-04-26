import React from "react";
import ReactDOM from "react-dom/client";
class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {
      welcome,
      title,
      author: {firstName, lastName},
      date
    } = this.props.data
    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{firstName} {lastName}</h3>
          <small>{date}</small>
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
