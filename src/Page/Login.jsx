import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen">
      <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handelLogin} className="fieldset space-y-2">
            <h1 className="text-4xl font-bold text-center">Login now</h1>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="input"
              placeholder="Username or Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="input"
              placeholder="Password"
            />
            <div className="flex justify-between items-center">
              <span className="flex gap-1.5 items-center">
                <input type="checkbox" name="check" id="" />
                <p>Remember Me</p>
              </span>
              <a className="link link-hover text-amber-600">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <button>
              Dont't Have An Account ?
              <Link to="/register">
                {" "}
                <b className="text-blue-500 font-black">Register</b>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
