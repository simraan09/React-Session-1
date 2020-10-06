import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import SplashLoadingPage from "../Pages/SplashLoadingPage/SplashLoadingPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import DashBoardPage from "../Pages/DashBoardPage/DashBoardPage";

export default function AppRoutes() {
  return (
    <Router>
      <Route exact path="/" component={SplashLoadingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashBoardPage} />
    </Router>
  );
}
