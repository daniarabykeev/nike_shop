import React from "react";
import "./Footer.css";
import twitter from "../../media/twitter.png";
import facebook from "../../media/facebook.png";
import youtube from "../../media/youtube.png";
import instagram from "../../media/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-card">
          <p>FIND A STORE</p>
          <p>SIGN UP FOR EMAIL</p>
          <p>BECOME A MEMBER</p>
          <p>FEEDBACK</p>
          <p>PROMO CODES</p>
        </div>
        <div className="footer-card">
          <p>GOT HELP</p>
          <p className="fg">Order Status</p>
          <p className="fg">Shiping and Delivery</p>
          <p className="fg">Returns</p>
          <p className="fg">Payment Options</p>
          <p className="fg">Contact Us</p>
        </div>
        <div className="footer-card">
          <p>About Nike</p>
          <p className="fg">News</p>
          <p className="fg">Careers</p>
          <p className="fg">Investors</p>
          <p className="fg">Sustainability</p>
        </div>
        <div className="footer-card">
          <p>Nike Apps</p>
          <p className="fg">Nike Run Club</p>
          <p className="fg">Nike Trainig Club</p>
        </div>
        <div></div>
        <div className="footer-logos footer-card">
          <img
            alt="logos"
            className="sl"
            style={{ width: "30px" }}
            src={twitter}
          />
          <img
            alt="logos"
            className="sl"
            style={{ width: "30px" }}
            src={facebook}
          />
          <img
            alt="logos"
            className="sl"
            style={{ width: "30px" }}
            src={youtube}
          />
          <img
            alt="logos"
            className="sl"
            style={{ width: "30px" }}
            src={instagram}
          />
        </div>
      </div>
      <div className="footer-second">
        <div className="footer-second-1">
          © 2022 Nike, Inc. All Rights Reserved
        </div>
        <div className="footer-second-2">
          <p className="fs2">Guides</p>
          <p className="fs2">Terms of Use</p>
          <p className="fs2">Terms of Sale</p>
          <p className="fs2">Company Details</p>
          <p className="fs2">Privacy & Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
