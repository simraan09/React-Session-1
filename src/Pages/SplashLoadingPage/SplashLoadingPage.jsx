import React from "react";
import { CircularProgress } from "@material-ui/core";

import "./styles.css";

export default function SplashLoadingPage() {
  return (
    <div className="splash-container">
      <CircularProgress color="secondary" style={{ marginBottom: 10 }} />
      <strong>Loading...</strong>
    </div>
  );
}
