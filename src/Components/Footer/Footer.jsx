import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center w-full bg-[#13131810] text-base-content rounded p-10">
      <img className="w-26" src={logo} alt="" />
      <div className="flex gap-5 items-center">
        <Link to="https://www.facebook.com/sohag.roy.283426">
          <FaFacebook size={30}></FaFacebook>
        </Link>
        <Link to=" https://github.com/sohagroy7223">
          <FaGithub size={30}></FaGithub>
        </Link>
        <Link to=" https://www.instagram.com/sohagroy7223/">
          <FaInstagram size={30}></FaInstagram>
        </Link>
      </div>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Sohag
          roy
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
