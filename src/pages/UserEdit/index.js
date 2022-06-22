import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../consts";

export const UserEdit = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    axios(`${BASE_URL}/users/${userId}`)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setCurrentUser((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${BASE_URL}/users`, { user: currentUser }).then((res) => {
      if (res.status === 200) {
        navigate("/users");
      }
    });
  };

  return (
    <>
      {isLoading && <h4>Loading...</h4>}
      {Boolean(error) && <h4>{String(error)}</h4>}
      {currentUser && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={currentUser.username}
            placeholder="enter username"
            onChange={handleChange}
          />

          <br />
          <input
            type="text"
            name="email"
            value={currentUser.email}
            placeholder="enter email"
            onChange={handleChange}
          />

          <br />
          <input
            type="text"
            name="avatar"
            value={currentUser.avatar}
            placeholder="enter avatar"
            onChange={handleChange}
          />

          <br />
          <input
            type="text"
            name="password"
            value={currentUser.password}
            placeholder="enter password"
            onChange={handleChange}
          />

          <br />
          <input
            name="birthdate"
            value={currentUser.birthdate}
            type="text"
            placeholder="enter birthdate"
            onChange={handleChange}
          />

          <br />

          {/* <input type="submit" value="Submit" /> */}
          <button>Submit</button>
        </form>
      )}
    </>
  );
};
