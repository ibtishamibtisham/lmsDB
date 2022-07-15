import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import { Lectures } from "./lectures";

export const Admin = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div style={{ width: "100%", height: "60px", background: "beige" }}>
        <button onClick={handleLogout}>Logout</button>
        <button>
          <Link to="/dashboard">Dashboard</Link>
        </button>
        <button>
          <Link to="/createlecture">create Lectures</Link>
        </button>
        <button>
          <Link to="/createassignments">create Assignments</Link>
        </button>
      </div>
      <h1>WElcome to admin Dashboard</h1>
    </>
  );
};
