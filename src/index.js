import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import LoadingProvider from "./context/LoadingProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // DONE todo wrap App with LoadingProvider to subscribe App to its context
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
);