import react, { useContext, useRef } from "react";
import { signup, useAuth, logout, login } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Dashboard } from "./Dashboard";

export const Signup = () => {
  const emailRef = useRef();
  const pwdRef = useRef();
  const user = useAuth();
  const Role = useRef();
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      await signup(emailRef.current.value, pwdRef.current.value);
      console.log("hello");
      navigate("/dashboard");
    } catch (error) {
      console.log("Email is already in use");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Email:{user?.email}</h1>
      <input
        ref={emailRef}
        placeholder="name"
        style={{ width: "50%", height: "50px", borderRadius: "10px" }}
      />
      <input
        ref={pwdRef}
        type="password"
        placeholder="pwd"
        style={{ width: "50%", height: "50px", borderRadius: "10px" }}
      />
      <br />
      <button
        onClick={handleSignup}
        style={{
          width: "20%",
          height: "30px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        Sign-up
      </button>
      <p>
        user available:
        <Link to="/login">Login</Link>
      </p>
    </>
  );
};
