
import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserList = () => {
    setLoading(true);
    axios.get("https://reqres.in/api/users").then((res) => {
      setUserList(res.data.data);
      setLoading(false);
      console.log(userList);
    });
  };

  return (
    <div className="container App">
      <div className="navbar">
        <h1 className="heading">Blue Whales</h1>
        <button className="btn" onClick={getUserList} disabled={loading}>
          {loading ? "Loading..." : "Get user List"}
        </button>
      </div>

      <table className="table ">
        <thead className="thead">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>

        <tbody className="tbody">
          {userList.map((x, i) => (
            <tr key={i}>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td>
                <img
                  src={x.avatar}
                  width="100"
                  height="80"
                  alt={x.avatar}
                />
              </td>
            </tr>
          ))}
          {userList.length === 0 && (
            <tr>
              <td>
                <b>NO data found to display</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;

