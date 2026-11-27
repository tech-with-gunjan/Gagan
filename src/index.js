// Import React so we can use React features.
import React from "react";

// Import ReactDOM so React can display our app in the browser.
import ReactDOM from "react-dom/client";

// Import our main App component.
import App from "./App";

// Import global CSS styles.
import "./index.css";


// Find the HTML element with id="root"
// and create the main React root.
const root = ReactDOM.createRoot(
  document.getElementById("root")
);


// Render our React application.
root.render(

  // StrictMode helps identify potential problems
  // while developing the application.
  <React.StrictMode>

    {/* Display our main App component. */}
    <App />

  </React.StrictMode>
);