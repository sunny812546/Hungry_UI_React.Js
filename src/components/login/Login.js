import React from "react";
import "./Login.css";
import top_img from "../../assets/object 2.png";
import button_sec from "../../assets/button_sec.png";
import google_icon from "../../assets/icon_google.png";
import fb_icon from "../../assets/icon_fb.png";
import mobile_icon from "../../assets/icon_mobile.png";
import mail_icon from "../../assets/icon_mail.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login-top">
        <img className="img-top" src={top_img} />
      </div>
      <div className="login-bottom">
        <p style={{ alignSelf: "start", fontWeight: "bold" }}>LOGIN</p>
        <div className="button-grp">
          <Link to="/verify" className="link">
            <img className="button" src={button_sec} />
            <div className="img-content">
              <img className="icon" src={mobile_icon} />
              <p>Enter Your Mobile Number</p>
            </div>
          </Link>
        </div>

        <div className="button-grp">
          <Link to="/verify" className="link">
            <img className="button" src={button_sec} />
            <div className="img-content">
              <img className="icon" src={fb_icon} />
              <p>Continue With Facebook</p>
            </div>
          </Link>
        </div>

        <div className="button-grp">
          <Link to="/verify" className="link">
            <img className="button" src={button_sec} />
            <div className="img-content">
              <img className="icon" src={google_icon} />
              <p>Continue With Google</p>
            </div>
          </Link>
        </div>

        <div className="button-grp">
          <Link to="/verify" className="link">
            <img className="button" src={button_sec} />
            <div className="img-content">
              <img className="icon" src={mail_icon} />
              <p>Continue With Email</p>
            </div>
          </Link>
        </div>
        <div className="bottom-line">
          <p>
            By Continuing, You Agree To Our <a href="#">Terms of Service</a> &{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
