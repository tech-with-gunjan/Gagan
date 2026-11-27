// Import the useState Hook from React.
// useState allows us to store data that can change.
import { useState } from "react";
// Import the CSS file for styling the calculator.
import "./App.css";


// Create our main App component.
function App() {


  // Create a state variable called display.
  // This stores the current calculation shown on the screen.
  // Example: "10+5"
  const [display, setDisplay] = useState("");


  // Create a state variable called history.
  // This stores all completed calculations.
  // The initial value is an empty array.
  const [history, setHistory] = useState([]);


  // Create a state variable called darkMode.
  // false means Light Mode is active initially.
  const [darkMode, setDarkMode] = useState(false);


  // This function runs when the user clicks
  // a number or mathematical operator.
  const handleClick = (value) => {

    // If the display currently shows Error,
    // start a fresh calculation.
    if (display === "Error") {

      // Replace Error with the clicked value.
      setDisplay(value);

    } else {

      // Add the clicked value to the existing display.
      // Example:
      // display = "12"
      // value = "3"
      // New display = "123"
      setDisplay(display + value);
    }
  };


  // This function clears the calculator display.
  const clearDisplay = () => {

    // Set the display back to an empty string.
    setDisplay("");
  };


  // This function removes the last character
  // from the calculator display.
  const deleteLast = () => {

    // If the display is Error,
    // clear the complete display.
    if (display === "Error") {

      // Remove Error.
      setDisplay("");

    } else { 

      // Remove the last character.
      // Example:
      // "1234".slice(0, -1)
      // becomes "123".
      setDisplay(display.slice(0, -1));
    }
  };


  // This function performs the mathematical calculation.
  const calculate = () => {

    // Do not calculate if the display is empty.
    if (display === "") {

      // Stop the function.
      return;
    }


    // Try to calculate the mathematical expression.
    try {

      // Store the current expression before calculating.
      // Example:
      // "10+5"
      const expression = display;


      // Calculate the mathematical expression.
      // Example:
      // eval("10+5") returns 15.
      const result = eval(expression);


      // Convert the result into text.
      const resultString = result.toString();


      // Create a complete history item.
      // Example:
      // "10+5 = 15"
      const historyItem =
        expression + " = " + resultString;


      // Add the new calculation to the history array.
      // ...history keeps all previous history items.
      setHistory([...history, historyItem]);


      // Show the result on the calculator display.
      setDisplay(resultString);

    } catch {

      // If the expression is invalid,
      // show Error on the display.
      setDisplay("Error");
    }
  };


  // This function clears the complete calculation history.
  const clearHistory = () => {

    // Replace the history array with an empty array.
    setHistory([]);
  };


  // This function changes between Light Mode and Dark Mode.
  const toggleDarkMode = () => {

    // !darkMode means the opposite of the current value.
    //
    // If darkMode is false → it becomes true.
    // If darkMode is true → it becomes false.
    setDarkMode(!darkMode);
  };


  // Return the visual user interface.
  return (

    // Main application container.
    // Add the "dark" class only when darkMode is true.
    <div className={`app ${darkMode ? "dark" : ""}`}>


      {/* Main calculator and history wrapper. */}
      <div className="main-container">


        {/* Top section containing the title and theme button. */}
        <div className="top-bar">


          {/* Calculator application title. */}
          <h1>Calculator</h1>


          {/* Dark Mode toggle button. */}
          <button

            // Run toggleDarkMode when clicked.
            onClick={toggleDarkMode}

            // Apply styling for the theme button.
            className="theme-button"
          >

            {/* Show sun in Dark Mode and moon in Light Mode. */}
            {darkMode ? "☀️ Light" : "🌙 Dark"}

          </button>


        </div>


        {/* Container for the calculator and history panel. */}
        <div className="content-container">


          {/* Main calculator box. */}
          <div className="calculator">


            {/* Calculator display screen. */}
            <input

              // Define the input as text.
              type="text"

              // Show the current display state.
              value={display}

              // Prevent direct typing.
              readOnly

              // Apply display CSS styling.
              className="display"
            />


            {/* Container for all calculator buttons. */}
            <div className="buttons">


              {/* Clear button. */}
              <button

                // Clear the complete display.
                onClick={clearDisplay}

                // Apply operator styling.
                className="operator"
              >
                C
              </button>


              {/* Delete button. */}
              <button

                // Remove the last character.
                onClick={deleteLast}

                // Apply operator styling.
                className="operator"
              >
                ⌫
              </button>


              {/* Division button. */}
              <button

                // Add / to the mathematical expression.
                onClick={() => handleClick("/")}

                // Apply operator styling.
                className="operator"
              >
                ÷
              </button>


              {/* Multiplication button. */}
              <button

                // Add * to the mathematical expression.
                onClick={() => handleClick("*")}

                // Apply operator styling.
                className="operator"
              >
                ×
              </button>


              {/* Number 7 button. */}
              <button onClick={() => handleClick("7")}>
                7
              </button>


              {/* Number 8 button. */}
              <button onClick={() => handleClick("8")}>
                8
              </button>


              {/* Number 9 button. */}
              <button onClick={() => handleClick("9")}>
                9
              </button>


              {/* Subtraction button. */}
              <button

                // Add subtraction operator.
                onClick={() => handleClick("-")}

                // Apply operator styling.
                className="operator"
              >
                −
              </button>


              {/* Number 4 button. */}
              <button onClick={() => handleClick("4")}>
                4
              </button>


              {/* Number 5 button. */}
              <button onClick={() => handleClick("5")}>
                5
              </button>


              {/* Number 6 button. */}
              <button onClick={() => handleClick("6")}>
                6
              </button>


              {/* Addition button. */}
              <button

                // Add addition operator.
                onClick={() => handleClick("+")}

                // Apply operator styling.
                className="operator"
              >
                +
              </button>


              {/* Number 1 button. */}
              <button onClick={() => handleClick("1")}>
                1
              </button>


              {/* Number 2 button. */}
              <button onClick={() => handleClick("2")}>
                2
              </button>


              {/* Number 3 button. */}
              <button onClick={() => handleClick("3")}>
                3
              </button>


              {/* Equals button. */}
              <button

                // Calculate the mathematical expression.
                onClick={calculate}

                // Apply special equals button styling.
                className="equal"
              >
                =
              </button>


              {/* Zero button. */}
              <button

                // Make the zero button wider.
                className="zero"

                // Add 0 to the display.
                onClick={() => handleClick("0")}
              >
                0
              </button>


              {/* Decimal button. */}
              <button

                // Add a decimal point.
                onClick={() => handleClick(".")}
              >
                .
              </button>


            </div>

          </div>


          {/* History panel. */}
          <div className="history-panel">


            {/* History heading. */}
            <div className="history-header">


              {/* Display the history title. */}
              <h2>History</h2>


              {/* Clear History button. */}
              <button

                // Remove all history items.
                onClick={clearHistory}

                // Apply clear history styling.
                className="clear-history"
              >
                Clear
              </button>


            </div>


            {/* Check if there are no history items. */}
            {history.length === 0 ? (

              // Show this message when history is empty.
              <p className="empty-history">
                No calculations yet
              </p>

            ) : (

              // Display every calculation in the history array.
              <div className="history-list">


                {/* Loop through every history item. */}
                {history.map((item, index) => (

                  // Display one calculation.
                  <div
                    key={index}
                    className="history-item"
                  >
                    {item}
                  </div>

                ))}


              </div>
            )}


          </div>


        </div>


      </div>

    </div>
  );
}


// Export App so index.js can use it.
export default App;