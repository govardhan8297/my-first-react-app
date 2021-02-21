import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import MemeGenerator from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <Footer />
    </div>
  );
}
export default App;
