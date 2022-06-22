import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";

import { Link } from "react-router-dom";
import { BASE_URL, QUERY_KEYS } from "../../consts";
import { UserRow } from "./components/UserRow";

import { useQuery, useQueryClient } from "react-query";

export const Users = () => {
  const { isLoading, error, data } = useQuery(QUERY_KEYS.users, () => {
    return axios(`${BASE_URL}/users`);
  });

  const queryClient = useQueryClient();

  if (isLoading) {
    return "loading";
  }

  if (error) {
    return "something went wrong";
  }

  const onDelete = () => {
    queryClient.resetQueries(QUERY_KEYS.users);
  };

  return (
    <section>
      <Box component="h1" display="flex" justifyContent="space-between">
        Users page
        <Button color="primary" variant="contained">
          <Link to="/users/create">Create new user</Link>
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>UserId</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.map((user) => {
              return (
                <UserRow key={user.userId} user={user} onDelete={onDelete} />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};
