import { useState } from "react";
import axios from "axios";
export const Assignments = () => {
  const [add, setAdd] = useState({ name: "", topic: "", video: "" });
  const handleData = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    await axios
      .post("https://ibtilms.herokuapp.com/assignments", {
        name: add.name,
        topic: add.topic,
        video: add.video,
      })
      .then((res) => {
        alert("Lassignment has been created ");
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

      <input
        placeholder="topic"
        name="topic"
        onChange={handleData}
        style={{ width: "50%", height: "50px", borderRadius: "10px" }}
      />
      <input
        placeholder="video"
        name="video"
        onChange={handleData}
        style={{ width: "50%", height: "50px", borderRadius: "10px" }}
      />
      <br />
      <button
        onClick={addData}
        style={{
          width: "20%",
          height: "30px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        Add assignment
      </button>
    </>
  );
};
