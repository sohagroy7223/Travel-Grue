import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handelOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const links = (
    <>
      <NavLink to="/" className="mr-4">
        Home
      </NavLink>
      <NavLink to="packages" className="mr-4">
        Packages
      </NavLink>
      <NavLink to="testimonial" className="mr-4">
        Testimonial
      </NavLink>
      <NavLink to="blog" className="mr-4">
        Blog
      </NavLink>
      <NavLink to="contact" className="mr-4">
        Contact
      </NavLink>
    </>
  );
  return (
    <nav className="flex justify-between items-center  mt-5">
      {/* logo */}
      <img className="w-23" src={logo} alt="" />
      {/* NavLink */}
      <div className="hidden md:flex">{links}</div>
      {/* Login */}
      <button className="btn bg-primary text-base-100 hidden md:flex">
        Sign In
      </button>
      <div onClick={handelOpenMenu} className="md:hidden relative">
        {openMenu ? <IoClose size={25}></IoClose> : <IoMenu size={25}></IoMenu>}
        <span
          className={`flex absolute flex-col bg-amber-500 duration-700 px-2 py-4 rounded-lg -ml-20 ${openMenu ? <links></links> : "-mt-80"}`}
        >
          {links}
          <button className="btn bg-primary text-base-100">Sign In</button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
