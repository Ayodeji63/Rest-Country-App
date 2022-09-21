import React, { useContext, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import { Context } from "./Context";
import CountryCard from "./Components/Card";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";

const App = () => {
  const {theme} = useContext(Context)
  return (
    <div className={`App ${theme}`}>
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countryDetail" element={<CountryDetails />} />
      </Routes>

    </div>
  );
};

export default App;
