import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
  <p>The weight of the object on Earth is {props.weight} N.</p>
)

const App = () => {
  let currentYear = 2020
  let birthYear = 1820
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  return (
    <div className="app">
      <Age age={age}/>
      <Weight weight={gravity * mass}/>
    </div>
  )
}


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
