import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="flex w-full justify-center gap-3 items-center">
      <div className="space-y-5">
        <h3 className="text-4xl text-amber-700 font-bold">Get in Touch</h3>
        <p className="text-green-600 font-bold">
          If you have any inquiries or just say hi, please use the contact form
          !
        </p>
        <div className="mt-16 space-y-5">
          <span className="flex items-center gap-10">
            <MdEmail size={30}></MdEmail>
            <p className="underline"> sohagroy7223@gmail.com</p>
          </span>
          <span className="flex items-center gap-10">
            <BiSolidLike size={30}></BiSolidLike>{" "}
            <div className="flex gap-5 items-center">
              <Link to="https://www.facebook.com/sohag.roy.283426">
                <FaFacebook size={25}></FaFacebook>
              </Link>
              <Link to=" https://github.com/sohagroy7223">
                <FaGithub size={25}></FaGithub>
              </Link>
              <Link to=" https://www.instagram.com/sohagroy7223/">
                <FaInstagram size={25}></FaInstagram>
              </Link>
              <Link to="https://wa.me/8801311976179">
                <FaWhatsapp size={25}></FaWhatsapp>
              </Link>
            </div>
          </span>
        </div>
      </div>
      <div className="border space-y-4 p-2">
        <div className="flex gap-3 justify-center w-full">
          <input
            className="border w-full p-2"
            type="text"
            placeholder="First Name"
          />

          <input
            className="border w-full p-2"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border w-full p-2"
          type="email"
          name="email"
          placeholder="Enter your email"
          id=""
        />
        <label>Massage</label>
        <textarea
          className="border w-full p-2"
          name="text area "
          id=""
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
