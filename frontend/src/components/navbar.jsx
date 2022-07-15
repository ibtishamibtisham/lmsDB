export const Navbar = () => {
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
        </ul>
      </div>
    </>
  );
};
