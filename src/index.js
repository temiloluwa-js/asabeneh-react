import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

// class based component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  handleClick = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    let status = this.state.loggedIn ? <h1>Hola mina-san</h1> : <h2>Log In First</h2>;
    return <div className="home-wrapper">
      <Header data={data}/>
      {status}
      <Button text={this.state.loggedIn ? 'Log Out': 'Log In'} style={buttonStyles} onClick={this.handleClick}/>
    </div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
