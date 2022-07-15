import axios from "axios";
import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ShowLecture = () => {
  const [show1, setShow1] = useState([]);

  const addData = async () => {
    await axios
      .get("https://ibtilms.herokuapp.com/assignments")
      .then((res) => {
        setShow1(res.data);
      })
      .catch((err) => {
        console.log("not");
      });
  };
  useEffect(() => {
    addData();
  }, []);
  return (
    <>
      {show1 &&
        show1.map((item) => {
          return (
            <div
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid black",
                // margin: "auto",
              }}
            >
              <Link to="/sample">
                <p>
                  created by:<strong>{item.name}</strong> for Topic:
                  <strong>{item.topic}</strong> at <strong>{item.date}</strong>
                </p>
              </Link>
            </div>
          );
        })}
    </>
  );
};
