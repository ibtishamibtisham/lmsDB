import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Show = () => {
  const [show, setShow] = useState([]);
  const [status, setStatus] = useState(false);
  const addData = async () => {
    await axios
      .get("https://ibtilms.herokuapp.com/lectures")
      .then((res) => {
        setShow(res.data);
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
      {show &&
        show.map((item) => {
          return (
            <div
              style={{
                width: "100%",
                height: "60px",
                border: "1px solid black",
                // margin: "auto",
              }}
            >
              {/* <h1>{item.subject}</h1> */}
              <Link to="/sample">
                <p>
                  created by:<strong>{item.name}</strong> for subject:
                  <strong>{item.subject}</strong> at{" "}
                  <strong>{item.date}</strong>
                </p>
              </Link>
            </div>
          );
        })}
    </>
  );
};
