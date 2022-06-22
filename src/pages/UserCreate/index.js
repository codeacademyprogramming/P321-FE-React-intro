import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../consts";

import { useForm } from "react-hook-form";
import { Alert } from "@mui/material";

export const UserCreateOld = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post(`${BASE_URL}/users`, { user: data }).then((res) => {
      if (res.status === 204) {
        navigate("/users");
      }
    });
  };

  return (
    <div>
      <h1>Create new user</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="username"
          placeholder="enter username"
          {...register("username", { required: true })}
        />

        <br />
        {errors.username && (
          <Alert severity="error" variant="outlined">
            This field is required
          </Alert>
        )}

        <br />
        <input
          type="text"
          name="email"
          placeholder="enter email"
          {...register("email", { required: true })}
        />

        <br />
        {errors.email && (
          <Alert severity="error" variant="outlined">
            This field is required
          </Alert>
        )}

        <br />
        <input
          type="text"
          name="avatar"
          placeholder="enter avatar"
          {...register("avatar", { required: true })}
        />

        <br />
        {errors.avatar && (
          <Alert severity="error" variant="outlined">
            This field is required
          </Alert>
        )}

        <br />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          {...register("password", { required: true })}
        />

        <br />
        {errors.password && (
          <Alert severity="error" variant="outlined">
            This field is required
          </Alert>
        )}

        <br />
        <input
          type="text"
          name="birthdate"
          placeholder="enter birthdate"
          {...register("birthdate", { required: true })}
        />

        <br />
        {errors.birthdate && (
          <Alert severity="error" variant="outlined">
            This field is required
          </Alert>
        )}

        <br />

        {/* <input type="submit" value="Submit" /> */}
        <button>Submit</button>
      </form>
    </div>
  );
};
