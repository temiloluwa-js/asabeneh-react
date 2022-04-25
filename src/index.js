import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
const style = {backgroundColor: 'red', color: 'gray'}
const main = (
  <div style={style}>
    <h1>I'll get there. 😎</h1>
  </div>
)


root.render(
  <React.StrictMode>
    {main}
  </React.StrictMode>
);
