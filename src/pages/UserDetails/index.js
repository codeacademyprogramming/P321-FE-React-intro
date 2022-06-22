import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../consts";

export const UserDetails = () => {
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

  return (
    <>
      {isLoading && <h4>Loading...</h4>}
      {Boolean(error) && <h4>{String(error)}</h4>}
      {currentUser && (
        <div>
          <dl>
            <dt>Avatar</dt>
            <dd>
              <img src={currentUser.avatar} alt="test" />
            </dd>
            <dt>UserId</dt>
            <dd>{currentUser.userId}</dd>
            <dt>Username</dt>
            <dd>{currentUser.username}</dd>

            <dt>Birthdate</dt>
            <dd>{currentUser.birthdate}</dd>

            <dt>Email</dt>
            <dd>{currentUser.email}</dd>

            <dt>Password</dt>
            <dd>{currentUser.password}</dd>

            <dt>Registered at</dt>
            <dd>{currentUser.registeredAt}</dd>
          </dl>
        </div>
      )}
    </>
  );
};
