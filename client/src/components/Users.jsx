import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api/usersApi";
import "../style/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laster brukere...</p>;
  if (error) return <p>Noe gikk galt: {error.message}</p>;

  return (
    <div className="users-container">
      <h1>Brukere</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
