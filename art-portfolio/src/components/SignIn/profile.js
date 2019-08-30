import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile({ history }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const url =
      "https://mock-users-server.herokuapp.com/api/protected";

    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: `${token}` 
          }
        })
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(e => {
          console.log(e.response.data);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, [history]);
  return (
    <>
      <div>Profile Page</div>
      <div>{message}</div>
      <button
        className="btn"
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/");
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Profile;
