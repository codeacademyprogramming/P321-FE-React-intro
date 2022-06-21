import React from "react";

import styles from "./index.module.css";

export const UserRow = ({ user, onDelete }) => {
  const handleDelete = (userId) => {
    const isUserSure = window.confirm(
      "Are you sure, you want to delete this user"
    );

    if (isUserSure) {
      fetch(`http://localhost:3333/users/${userId}`, {
        method: "DELETE",
      })
        .then((res) => res.text())
        .then(() => {
          onDelete(userId);
        });
    }
  };

  return (
    <tr>
      <td>
        <img
          className={styles.avatar}
          src={user.avatar}
          alt={`${user.username} avatar`}
        />
      </td>
      <td>{user.userId}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td>{user.birthdate}</td>
      <td>{user.registeredAt}</td>
      <td>
        <button
          onClick={() => {
            handleDelete(user.userId);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
