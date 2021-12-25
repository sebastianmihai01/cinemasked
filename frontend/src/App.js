import ResponsiveAppBar from "./components/navigation/ResponsiveAppBar";
import Home from "./components/home/Home";
import SignIn from "./components/auth/SignIn";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRouter from "../src/components/navigation/CustomRouter";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <CustomRouter />
      </Router>
    </React.StrictMode>
  );
}

export default App;
