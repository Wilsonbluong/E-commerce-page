import React from "react";
import { render } from "react-dom";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { SubmenuProvider } from "./context/submenu";

render(
  <React.StrictMode>
    <GlobalStyles />
    <SubmenuProvider>
      <App />
    </SubmenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
