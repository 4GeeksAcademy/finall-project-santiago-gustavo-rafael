// src/front/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import { StoreProvider } from "./store/useGlobalReducer.jsx";
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
