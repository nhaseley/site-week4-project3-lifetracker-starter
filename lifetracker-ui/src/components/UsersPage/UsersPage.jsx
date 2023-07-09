import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UsersPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UsersPage({ error, setError }) {
  const [users, setUsers] = useState([]);
  const [userFollowings, setUserFollowings] = useState([]);

  async function showUsers() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      axios
        .post("http://localhost:3001/auth/users", {
          token: existingToken,
        })
        .then((users) => {
          setUsers(users.data.databaseUsers);
          setUserFollowings(users.data.userFollowings);
        });
    } else {
      console.log("Token expired. Please log in again.");
    }
  }

  useEffect(() => {
    showUsers();
  }, [userFollowings.length]);

  async function followUser(event) {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      axios
        .post("http://localhost:3001/auth/follow", {
          token: existingToken,
          followed_id: event.target.value,
        })
        .then((users) => {
          setUserFollowings(users.data);
        });
    } else {
      console.log("Token expired. Please log in again.");
    }
  }

  useEffect(() => {}, []);

  function isFollowing(user_id) {
    return userFollowings.some((item) => Object.values(item).includes(user_id));
  }
//   console.log("followings: ", userFollowings);

  return (
    <div className="users-page">
        <div>
      <div style={{marginBottom: "10px", marginTop: "10px"}}>
      
        Currently Following:
        </div>
        {userFollowings?.map((following) => (
          <div className="following-card">
            <div className="following-name">
              User with ID #{following.followed_id}
            </div>
          </div>
        ))}
      </div>
      
      {users?.map((user) => (
        <div className="user-card">
          <div className="user-name">
            {" "}
            {user.first_name} {user.last_name}{" "}
          </div>
          <br></br>
          <button
            className="follow-button"
            value={user.id}
            onClick={followUser}
            style={{ background: isFollowing(user.id) ? "#065666" : "#00B5D8" }}
          >
            Follow User
          </button>
          <div className="following-already">
            {isFollowing(user.id)
              ? "You are already following this user"
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}
