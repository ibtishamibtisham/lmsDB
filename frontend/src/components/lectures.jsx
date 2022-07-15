import { useState } from "react";
import axios from "axios";

export const Lectures = () => {
  const [add, setAdd] = useState({ name: "", subject: "" });
  const handleData = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    await axios
      .post("https://ibtilms.herokuapp.com/lectures", {
        name: add.name,
        subject: add.subject,
      })
      .then((res) => {
        alert("Lecture has been created ");
      })
      .catch((err) => {
        console.log("not");
      });
  };

  return (
    <>
      <input
        placeholder="name of the Admin"
        name="name"
        onChange={handleData}
        style={{ width: "50%", height: "50px", borderRadius: "10px" }}
      />
      <br />
      <input
        placeholder="subject"
        name="subject"
        onChange={handleData}
        style={{ width: "50%", height: "50px", borderRadius: "10px" }}
      />
      <br />
      <button
        onClick={addData}
        style={{
          width: "30%",
          height: "50px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        Add
      </button>
    </>
  );
};
