import React from "react";
import Navbar from "./Navbar";
import FirstArea from "./firstArea";
import "bootstrap/dist/css/bootstrap.min.css";
import SecondArea from "./secondArea";
import Card from "./Card";
import Contact from "./ContactDetails";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <FirstArea />
      <SecondArea />
      <h2 style={{ textAlign: "center", paddingTop: "5%" }}>
        <b>Products and Services</b>
      </h2>
      <Card />
      <Contact />
      <div
        style={{
          backgroundColor: "#F54748",
          padding: "0.5% 0% 0.5%",
          textAlign: "center"
        }}
      >
        <p style={{ color: "white" }}>
          <b>Copyright © 2015 - Dwidasa Samsara Indonesia</b>
        </p>
      </div>
    </div>
  );
}

export default App;
