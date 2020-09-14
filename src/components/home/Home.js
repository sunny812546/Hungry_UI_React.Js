import React from "react";
import "./Home.css";
import logo from "../../assets/tiffinia.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/hunger">
        <img className="home-img" src={logo} />
      </Link>
    </div>
  );
}

export default Home;
