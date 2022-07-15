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
      />
      <input placeholder="subject" name="subject" onChange={handleData} />
      <button onClick={addData}>Add</button>
    </>
  );
};
