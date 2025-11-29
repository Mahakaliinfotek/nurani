import React from "react";
import { Route, Routes, ScrollRestoration, useLocation } from "react-router-dom";
import "./App.css";

import { Container, Typography, Button } from "@mui/material";
import HomePage from "./pages/homepages/Home";
import Story from "./pages/Story/Story";
import LegacyLeadershipPage from "./pages/homepages/LegacyLeadershipPage";
import { Sustainability } from "./pages/homepages/Sustainability";
import { HomePageLayout } from "./layouts/HomePageLayout";

function App() {
  return (

    <>

      <Routes>
        <Route path="/story" element={<Story />} />
        <Route path="/about-us" element={<Story />} />
        <Route path="/" element={<HomePageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/legacy-leadership" element={<LegacyLeadershipPage />} />
          <Route path="/sustainability" element={<Sustainability />} />

        </Route>

      </Routes>
    </>
  );
}

export default App;
