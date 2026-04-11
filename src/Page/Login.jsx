import React, { use, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { SignIn, setUser, resetPassword, loginWithGoogle } = use(AuthContext);
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

  const handelLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
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
    <div className="w-11/12 mx-auto">
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
      <div>
        <p className="flex items-center justify-center gap-3.5">
          <hr className="w-60" />
          <p>or</p>
          <hr className="w-60" />
        </p>
        <div className="flex justify-center mt-3">
          <button
            onClick={handelLoginWithGoogle}
            className="btn bg-white md:w-80 text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
