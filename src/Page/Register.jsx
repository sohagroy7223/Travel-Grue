import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { SignUp, setUser, UpdateUser, emailVerify } = use(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const trams = e.target.check.checked;

    if (!trams) {
      return alert("please accept our trams and conduction");
    }

    setError("");

    // password validation

    const passwordRegEx = /(?=.*\d)/;
    const passwordRegEx2 = /(?=.*[A-Z])/;
    const passwordRegEx3 = /(?=.*[a-z])/;
    const passwordRegEx4 = /(?=.*[@$!%*?&])/;
    const passwordRegEx5 = /.{8,}/;

    if (passwordRegEx.test(password) === false) {
      setError("add any number character");
      return;
    } else if (passwordRegEx2.test(password) === false) {
      setError("Must include an uppercase letter");
      return;
    } else if (passwordRegEx3.test(password) === false) {
      setError("Must include a lowercase letter");
      return;
    } else if (passwordRegEx4.test(password) === false) {
      setError("Must include a special (@#$&*?) character");
      return;
    } else if (passwordRegEx5.test(password) === false) {
      setError("Password must be at least 8 characters");
      return;
    }

    // console.log(name, photo);
    SignUp(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess(true);
        emailVerify().then(() => {
          alert("please check your and verified your email");
        });

        UpdateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setError(error.message);
            setUser(user);
          });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
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
            <p className="text-red-500 text-xs">{error}</p>

            <span className="flex gap-1.5 items-center">
              <input type="checkbox" name="check" id="" />
              <p>trams and condition</p>
            </span>

            <button className="btn btn-neutral mt-4">Register</button>
            <button>
              Already Have An Account ?
              <Link to="/login">
                {" "}
                <b className="text-blue-500 font-black">Login</b>
              </Link>
            </button>
            {success && (
              <p className="text-green-600">Sign up user successfully</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
