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
      <h1>{user?.email}</h1>
      <input ref={emailRef} placeholder="name" />
      <input ref={pwdRef} type="password" placeholder="pwd" />
      <button onClick={handleSignup}>sumbit</button>
      <button onClick={handleLogout}>Logout</button>

      <h1>
        user available:
        <Link to="/login">Login</Link>
      </h1>
    </>
  );
};
