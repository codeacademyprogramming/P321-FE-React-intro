import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link> | {""}
      <Link to="about">About</Link> | {""}
      <Link to="contact">Contact</Link> | {""}
      <Link to="todos">Todos</Link> | {""}
      <Link to="users">Users</Link>
    </nav>
  );
};
