import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { SignUp, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo);
    SignUp(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handelRegister} className="fieldset space-y-1">
            <h1 className="text-4xl font-bold text-center">Register now!</h1>
            <label className="label">name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="input photo url"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="password"
              className="input"
              placeholder="Password"
            />

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
