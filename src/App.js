import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tmdbrd" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
