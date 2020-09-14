import React from "react";
import "./Verify.css";
import img_top from "../../assets/object 3.png";
import button_sec from "../../assets/button_sec.png";
import button_main from "../../assets/button_main.png";

function Verify() {
  return (
    <div className="verify">
      <div className="verify-top">
        <img className="img-top" src={img_top} />
      </div>
      <div className="verify-bottom">
        <div className="number">
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>LOGIN</p>
          <p style={{ fontSize: "10px" }}>Enter Your Mobile Number</p>
          <img className="button" src={button_sec} />
          <div className="img-content">
            <p style={{ marginLeft: "5px", fontSize: "18px" }}>
              +91 | 9876543210
            </p>
          </div>
        </div>
        <div className="otp">
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>VERIFY OTP</p>
          <p style={{ fontSize: "10px" }}>OTP sent to 9876543210</p>
          <img className="button" src={button_sec} />
          <div className="img-content">
            <p style={{ marginLeft: "5px", fontSize: "18px" }}>
              <p
                style={{
                  letterSpacing: "26px",
                  marginBottom: "-15px",
                  marginLeft: "20px",
                }}
              >
                555555
              </p>
              <span className="underline"></span>
              <span className="underline"></span>
              <span className="underline"></span>
              <span className="underline"></span>
              <span className="underline"></span>
              <span className="underline"></span>
            </p>
          </div>
          <div className="change-resend">
            <p style={{ color: "#f79837", fontSize: "10px" }}>
              Change Mobile Number
            </p>
            <p style={{ fontSize: "10px" }}>
              Auto-Detect in 00:00
              <span
                style={{
                  color: "#f79837",
                  fontSize: "10px",
                  display: "inline-block",
                }}
              >
                RESEND
              </span>
            </p>
          </div>
        </div>
        <div className="proceed">
          <img className="button" src={button_main} />
          <div className="img-content" style={{ justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: "bold" }}>PROCEED</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
