import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Button } from "./components/Button";
import { CustomButton } from "./components/CustomButton";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Todo } from "./Todo";

export const App = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const uName = prompt("Please enter your username");
    setUserName(uName);
  }, []);

  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link> | {""}
        <Link to="about">About</Link> | {""}
        <Link to="contact">Contact</Link> | {""}
        <Link to="todos">Todos</Link>
      </nav>

      <Button value="Button" />
      <CustomButton value="CustomButton" />

      <Routes>
        <Route path="/" element={<Home userName={userName} />} />
        <Route path="about" element={<About userName={userName} />} />
        <Route path="contact" element={<Contact userName={userName} />} />
        <Route path="todos" element={<Todo userName={userName} />} />
      </Routes>

      <footer className="footer">Hello from footer</footer>
    </>
  );
};

/*
  39 -> 3 - 9
  27 -> 2 - 7
  14 -> 1 - 4
  4
*/

// function mult(val) {}

// mult(39) === 4 // true

// TODO - props not sent handling
// TODO - how to handle crashes
