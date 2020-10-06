import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import "./styles.css";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [validateUserId, setValidateUserId] = useState({
    show: false,
    message: "",
  });

  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState({
    show: false,
    message: "",
  });

  const validateUserName = () => {
    if (!userId) {
      setValidateUserId({ show: true, message: "Please fill out this field" });
      return;
    }
  };

  const validateUserPassword = () => {
    if (!password) {
      setValidatePassword({ show: true, message: "Please provide password" });
      return;
    }
  };

  const handleLogin = () => {
    validateUserName();
    validateUserPassword();
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__image" />
        <div className="login__form">
          <h3 className="text-danger">Login</h3>
          <TextField
            className="m-3 w-75"
            variant="outlined"
            placeholder="Enter user name"
            error={validateUserId.show}
            helperText={validateUserId.message}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onBlur={validateUserName}
          />

          <TextField
            className="m-3 w-75"
            variant="outlined"
            placeholder="Enter your password"
            type="password"
            error={validatePassword.show}
            helperText={validatePassword.message}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validateUserPassword}
          />

          <button onClick={handleLogin} className="btn btn-danger w-75">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
