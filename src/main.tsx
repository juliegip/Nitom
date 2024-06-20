import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";

// Get the environment variable with TypeScript
const env = import.meta.env.VITE_APP_ENV as string;

// Set the document title based on the environment, only if in development
if (env === "DEV") {
  document.title = `${env} - NITOM Project`;
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />

    <App />
  </React.StrictMode>
);
