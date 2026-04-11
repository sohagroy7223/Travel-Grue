import React, { use, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, Navigate, NavLink, useNavigate } from "react-router";
import { IoClose, IoMenu } from "react-icons/io5";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, SignOut } = use(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const handelOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handelSignOut = () => {
    SignOut()
      .then(() => {
        console.log("sign out success full");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
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
      {/* {user && user.email} */}
      {/* Login */}
      <div className="flex gap-3 items-center">
        {user ? (
          <img
            className="w-14 h-13 bg-cover rounded-full"
            src={user.photoURL}
            alt=""
          />
        ) : (
          <img
            className="w-14 h-13 bg-cover rounded-full"
            src={
              "https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
            }
            alt=""
          />
        )}
        {user ? (
          <button
            onClick={handelSignOut}
            className="btn hidden md:block bg-primary text-base-100"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn hidden md:block bg-primary text-base-100">
              Sign In
            </button>
          </Link>
        )}
      </div>
      <div onClick={handelOpenMenu} className="md:hidden relative">
        {openMenu ? <IoClose size={25}></IoClose> : <IoMenu size={25}></IoMenu>}
        <span
          className={`flex absolute flex-col bg-amber-500 duration-700 px-2 py-4 rounded-lg -ml-20 ${openMenu ? <links></links> : "-mt-80"}`}
        >
          {links}

          <button className="btn bg-primary  text-base-100">
            {user ? (
              <button onClick={handelSignOut}>Log Out</button>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
