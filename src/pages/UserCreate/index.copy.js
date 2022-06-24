import { Button, FormControl, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../consts";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    username: yup
      .string()
      .min(5, "Username can not be lesser than 5")
      .max(20, "Username can not be longer than 20")
      .required("This field is required"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("This field is required"),
    password: yup.string().required("This field is required"),
    birthdate: yup.string().required("This field is required"),
  })
  .required();

export const UserCreate = () => {
  const [file, setFile] = useState();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      birthdate: "",
    },
    reValidateMode: "",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("birthdate", data.birthdate);
    formData.append("avatar", file);

    axios
      .post(`${BASE_URL}/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 204) {
          navigate("/users");
        }
      });
  };

  return (
    <Box width="50%" mx="auto">
      <h1>Create new user</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                label="Username"
                variant="outlined"
                {...field}
                error={Boolean(errors.username)}
                helperText={
                  errors?.username?.message ? errors.username.message : ""
                }
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                label="Email"
                variant="outlined"
                {...field}
                error={Boolean(errors.email)}
                helperText={errors?.email?.message ? errors.email.message : ""}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Controller
            name="birthdate"
            control={control}
            render={({ field }) => (
              <TextField
                label="Birthdate"
                variant="outlined"
                {...field}
                error={Boolean(errors.birthdate)}
                helperText={
                  errors?.birthdate?.message ? errors.birthdate.message : ""
                }
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          {/* <Controller
            name="avatar"
            control={control}
            render={({ field }) => (
              <TextField
                label="Avatar"
                variant="outlined"
                {...field}
                error={Boolean(errors.avatar)}
                helperText={
                  errors?.avatar?.message ? errors.avatar.message : ""
                }
              />
            )}
          /> */}
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                {...field}
                error={Boolean(errors.password)}
                helperText={
                  errors?.password?.message ? errors.password.message : ""
                }
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
