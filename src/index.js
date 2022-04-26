import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const options = [
  {
    value: '',
    label: '--Select Country--'
  },

  {
    value: 'Finland',
    label: 'Finland'
  },

  {
    value: 'Norway',
    label: 'Norway'
  },

  {
    value: 'Denmark',
    label: 'Denmark'
  }
]

const selectOptions = options.map(({value, label}) => {
  <option value={value}>{label}</option>
})

class App extends React.Component{
  state
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
