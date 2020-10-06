import React, { useEffect, useState } from "react";

import AppRoutes from "./AppRoutes/AppRoutes";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SplashLoadingPage from "./Pages/SplashLoadingPage/SplashLoadingPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    setToken(userToken);
    setLoading(false);
  }, []);

  if (loading) {
    return <SplashLoadingPage />;
  }

  return token ? <AppRoutes /> : <LoginPage />;
}
