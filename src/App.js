import React from "react";
import "./App.scss";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};

export default App;
