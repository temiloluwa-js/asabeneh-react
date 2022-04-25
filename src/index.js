import React from "react";
import ReactDOM from "react-dom/client";


const App = () => {

  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const evenStyle = { color: "white", padding: "40px", backgroundColor: "red" };
  const oddStyle = {
    color: "white",
    padding: "40px",
    backgroundColor: "green",
  };
  
  return (
    <div>
      {numbers.map((number) => number % 2 == 0 ? <p style={evenStyle}>{number}</p>:<p style={oddStyle}>{number}</p>)}
    </div>
    );
}
 



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
