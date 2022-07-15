import { async } from "@firebase/util";
import react, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup, useAuth, logout, login } from "../firebase";
import { Dashboard } from "./Dashboard";

export const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwdRef = useRef();
  const user = useAuth();
  const [Role, setRole] = useState(false);

  const handleLogin = async () => {
    try {
      await login(emailRef.current.value, pwdRef.current.value);
      if (Role == true) {
        alert("user successfully has been logged in as Admin");
        navigate("/admin");
      } else {
        alert("user successfully has been logged in to Dashboard");
        navigate("/dashboard");
        setRole(false);
      }
    } catch (error) {
      console.log("not there");
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
      <button
        onClick={() => {
          setRole(true);
        }}
      >
        Only admin
      </button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleLogin}>login</button>
    </>
  );
};
