import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Render the React component using ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Non-React code for calculator buttons and display
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = output.replace("%", "/100");
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll("button");
// const specialChars = ["%", "*", "/", "-", "+", "="];
// let output = "";

// //Define function to calculate based on button clicked.
// const calculate = (btnValue) => {
//   display.focus();
//   if (btnValue === "=" && output !== "") {
//     //If output has '%', replace with '/100' before evaluating.
//     output = (output.replace("%", "/100"));
//   } else if (btnValue === "AC") {
//     output = "";
//   } else if (btnValue === "DEL") {
//     //If DEL button is clicked, remove the last character from the output.
//     output = output.toString().slice(0, -1);
//   } else {
//     //If output is empty and button is specialChars then return
//     if (output === "" && specialChars.includes(btnValue)) return;
//     output += btnValue;
//   }
//   display.value = output;
// };

// //Add event listener to buttons, call calculate() on click.
// buttons.forEach((button) => {
//   //Button click listener calls calculate() with dataset value as argument.
//   button.addEventListener("click", (e) => calculate(e.target.dataset.value));
// });

