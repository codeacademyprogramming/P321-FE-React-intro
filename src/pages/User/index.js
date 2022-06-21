import { useEffect, useState } from "react";
import { UserRow } from "./components/UserRow";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/users")
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        setUsers(jsonRes);
      });
  }, []);

  const onDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.userId !== userId);
    setUsers(updatedUsers);
  };

  return (
    <section>
      <h1>Users page</h1>

      <table>
        <thead>
          <tr>
            <th>avatar</th>
            <th>userId</th>
            <th>username</th>
            <th>email</th>
            <th>password</th>
            <th>birthdate</th>
            <th>registeredAt</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <UserRow key={user.userId} user={user} onDelete={onDelete} />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
