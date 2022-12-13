import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer style={{ background: `url(${footer})`, backgroundSize: "cover" }} className="p-10 mt-12">
      <div className="footer justify-around">
        <div>
          <span className="footer-title text-lg">Services</span>
          <a className="link link-hover text-base">Emergency Checkup</a>
          <a className="link link-hover text-base">Monthly Checkup</a>
          <a className="link link-hover text-base">Weekly Checkup</a>
          <a className="link link-hover text-base">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title text-lg">ORAL HEALTH</span>
          <a className="link link-hover text-base">Fluoride Treatment</a>
          <a className="link link-hover text-base">Cavity Filling</a>
          <a className="link link-hover text-base">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title text-lg">OUR ADDRESS</span>
          <a className="link link-hover text-base">New York - 101010 Hudson</a>
        </div>
      </div>
      <div>
        <p className=" font-semibold mt-24 text-center">
          Copyright © {year} - All right reserved by Doctors Portal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
