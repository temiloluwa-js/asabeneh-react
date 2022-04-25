import React from "react";
import ReactDOM from "react-dom/client";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()];
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month} ${date}, ${year}`;
};

const Header = (props) => {
  const data = props.data;
  const { welcome, title, subtitle, author, date } = data;
  const { firstName, lastName } = author;
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting started React'
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
