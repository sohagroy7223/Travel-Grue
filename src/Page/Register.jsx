import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero min-h-screen">
      <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset space-y-1">
            <h1 className="text-4xl font-bold text-center">Register now!</h1>
            <label className="label">name</label>
            <input type="text" className="input" placeholder="Your name" />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="input photo url"
            />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <button>
              Already Have An Account ?
              <Link to="/login">
                {" "}
                <b className="text-blue-500 font-black">Login</b>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
