import React, { use, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { SignIn, setUser, resetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const emailRef = useRef();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);
    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelForgetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        alert("we send a reset password email , please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
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
              ref={emailRef}
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

            <a
              onClick={handelForgetPassword}
              className="link link-hover text-amber-600"
            >
              Forgot password?
            </a>

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
