import { useState } from "react";
import { Show } from "./Show";
import { ShowLecture } from "./showlectures";
import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [showstatus, setShowstatus] = useState(false);
  const [lecture, setLecture] = useState(false);
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
  const showmyData = () => {
    setShowstatus(true);
    setLecture(false);
  };
  const mydata = () => {
    setShowstatus(false);
    setLecture(true);
  };
  return (
    <>
      <div
        style={{ background: "beige", height: "60px", width: "100%", top: "0" }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>
            <h1 style={{ color: "maroon", margin: "10px" }}>MASAi</h1>
          </li>
          <li
            style={{
              color: "grey",
              margin: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            onClick={showmyData}
          >
            Lectures
          </li>
          <li
            style={{
              color: "grey",
              margin: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            onClick={mydata}
          >
            Assignments
          </li>
          <li
            style={{
              color: "grey",
              margin: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Quizes
          </li>
          <li
            style={{
              color: "grey",
              margin: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Tickets
          </li>
          <li
            style={{
              color: "grey",
              margin: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Discussions
          </li>
          <li
            style={{
              color: "grey",
              margin: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Notifications
          </li>
          <li
            style={{
              color: "grey",
              margin: "10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Electives
          </li>
          <li>
            <button
              style={{
                color: "grey",
                margin: "10px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <h1>Welcome to dashboard</h1>
      {showstatus == true ? <Show /> : ""}
      {lecture == true ? <ShowLecture /> : ""}
    </>
  );
};
