import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "firebase";
import "./css/SignInUp.css";

// import RegisterUser from "./customHooks";

//Material UI
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Divider } from "@material-ui/core";
import { SettingsInputSvideo } from "@material-ui/icons";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                uid: userAuth.user.uid,
                displayName: name,
                email: userAuth.user.email,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  // const signupAlert = () => {
  //   alert(`
  //   User Created!
  //   Name: ${input.name}
  //   Email: ${input.email}
  //   `);
  // };
  // const { handleSubmit, handleChange, input } = RegisterUser(signupAlert);

  return (
    <div className="linkedIn-signup">
      <div className="common-component">
        <div className="left-desc">
          <div className="logo logo-float">
            <h1>Linked</h1>
            <LinkedInIcon className="logo-icon" />
          </div>
          <h1>
            Welcome to your <br /> professional community
          </h1>
          <p>
            This is a LinkedIn Clone developed by Pearl Arora. <br />
            Check it out!
          </p>
        </div>

        <div className="right-form">
          <h1>Sign Up</h1>
          {/* <form onSubmit={handleSubmit} className="common-form"> */}
          <form className="common-form">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              // value={input.name}
              // onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              // value={input.email}
              // onChange={handleChange}
              type="email"
              placeholder="Email"
              required
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              // value={input.password}
              // onChange={handleChange}
              type="password"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              onClick={registerUser}
              className="submit-button"
            >
              Sign up
            </button>
            <div className="or-element">
              <Divider className="or-divider" />
              <p>or</p>
              <Divider className="or-divider" />
            </div>
            <button className="using-google">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
              Sign up with Google
            </button>
          </form>
          <div className="common-page-swap">
            <p>
              Already on LinkedIn? &nbsp;
              <a href="/signin">Sign in</a>
            </p>
          </div>
        </div>
      </div>
      <div className="common-footer">
        <p>Developed by Pearl Arora on React</p>
      </div>
    </div>
  );
}

export default Signup;
