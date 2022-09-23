import React from "react";

import Home from "./pages/Home";

import Inventory from "./pages/Inventory";

import Map from "./pages/Map";

import Header from "./components/Header";

import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/map" component={Map} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;