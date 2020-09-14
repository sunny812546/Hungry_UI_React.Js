import React from "react";
import "./Hunger.css";
import img_top from "../../assets/object 1.png";
import { Link } from "react-router-dom";

function Hunger() {
  return (
    <div className="hunger">
      <div className="hunger-top">
        <div className="hunger-content">
          <img className="img-top" src={img_top} />
          <div>
            <span className="text-1">HURRY!!!</span>
            <span className="text-2">HUNGER DON'T WAIT</span>
          </div>
        </div>
      </div>
      <div className="hunger-buttom">
        <Link className="link" to="/login">
          <button style={{ backgroundColor: "#f79837" }}>
            <span
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: "20px",
              }}
            >
              GET STARTED
            </span>
            <span style={{ fontSize: "10px", color: "black" }}>
              Avail Best Offers & Discounts Only For You
            </span>
          </button>
        </Link>

        <Link className="link" to="/login">
          <button style={{ fontSize: "20px" }}>Continue without Login</button>
        </Link>

        <Link className="link" to="/login">
          <button>
            <span style={{ fontSize: "15px", display: "inline-block" }}>
              Already a Tiffina Member?
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "#f79837",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              LOGIN
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hunger;
