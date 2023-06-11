import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import { store } from "./store";
import { Provider } from "react-redux";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {theme} from './theme/Theme'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

