import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <Footer />
    </Router>
  );
};

export default App;
