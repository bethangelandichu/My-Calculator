
import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import MathExpressionEvaluator from 'math-expression-evaluator'; // Import the math-expression-evaluator library
function App() {
  // Define state to store the calculator display value
  const [displayValue, setDisplayValue] = useState('');

  // Function to append a value to the display
  const appendToDisplay = (value) => {
    setDisplayValue(displayValue + value);
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplayValue('');
  };

  // Function to calculate the result

  const calculate = () => {
    try {
      const result = MathExpressionEvaluator.evaluate(displayValue); // Use math-expression-evaluator to evaluate the expression
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };
  // const calculate = () => {
  //   try {
  //     const result = eval(displayValue); // Use eval to evaluate the expression
  //     setDisplayValue(result.toString());
  //   } catch (error) {
  //     // Handle any errors here (e.g., division by zero)
  //     setDisplayValue('Error');
  //   }
  // };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" id="result" readOnly value={displayValue} />
        <div className="buttons">
          <button className="operator" onClick={clearDisplay}>C</button>
          {/* Replace onclick with onClick and pass the value as an argument */}
          <button onClick={() => appendToDisplay('7')}>7</button>
          <button onClick={() => appendToDisplay('8')}>8</button>
          <button onClick={() => appendToDisplay('9')}>9</button>
          <button onClick={() => appendToDisplay('+')}>+</button>
          <button onClick={() => appendToDisplay('4')}>4</button>
          <button onClick={() => appendToDisplay('5')}>5</button>
          <button onClick={() => appendToDisplay('6')}>6</button>
          <button onClick={() => appendToDisplay('-')}>-</button>
          <button onClick={() => appendToDisplay('1')}>1</button>
          <button onClick={() => appendToDisplay('2')}>2</button>
          <button onClick={() => appendToDisplay('3')}>3</button>
          <button onClick={() => appendToDisplay('*')}>*</button>
          <button onClick={() => appendToDisplay('0')}>0</button>
          <button onClick={() => appendToDisplay('.')}>.</button>
          <button className="operator" onClick={calculate}>=</button>
          <button onClick={() => appendToDisplay('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;






