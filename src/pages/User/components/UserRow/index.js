import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TableCell,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../consts";

import styles from "./index.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const UserRow = ({ user, onDelete }) => {
  const navigate = useNavigate();
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);

  const handleDelete = (userId) => {
    axios(`${BASE_URL}/users/${userId}`, {
      method: "DELETE",
    }).then(() => {
      onDelete();
    });
  };

  const handleEdit = (userId) => {
    navigate(`/users/${userId}/edit`);
  };

  const handleShowDetailsPage = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <>
      <TableRow
        key={user.userId}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        className={styles.tableRow}
        onClick={() => {
          handleShowDetailsPage(user.userId);
        }}
      >
        <TableCell component="th" scope="row">
          {user.userId}
        </TableCell>
        <TableCell>
          <img
            className={styles.avatar}
            src={user.avatar}
            alt={`${user.username} avatar`}
          />
        </TableCell>
        <TableCell align="right">{user.username}</TableCell>
        <TableCell align="right">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setIsConfirmationDialogOpen(true);
            }}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(user.userId);
            }}
            variant="contained"
            color="primary"
            style={{ marginLeft: "5px" }}
          >
            Edit
          </Button>
        </TableCell>
      </TableRow>
      <Dialog
        open={isConfirmationDialogOpen}
        TransitionComponent={Transition}
        onClose={() => {
          setIsConfirmationDialogOpen(false);
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are you sure, you want to delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsConfirmationDialogOpen(false);
            }}
            variant="contained"
            color="primary"
          >
            No
          </Button>
          <Button
            onClick={() => {
              setIsConfirmationDialogOpen(false);
              handleDelete(user.userId);
            }}
            variant="contained"
            color="error"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
