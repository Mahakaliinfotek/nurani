import React from "react";
import { Route, Routes, ScrollRestoration, useLocation } from "react-router-dom";
import "./App.css";

import { Container, Typography, Button } from "@mui/material";
import HomePage from "./pages/homepages/Home";

function App() {
  return (

    <>

      <Routes>

        <Route path="/" element={<HomePage />} />

      </Routes>
    </>
  );
}

export default App;
