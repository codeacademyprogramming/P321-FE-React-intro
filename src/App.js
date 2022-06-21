import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Users } from "./pages/User";
import { Todo } from "./Todo";

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="todos" element={<Todo />} />
        <Route path="users" element={<Users />} />
      </Routes>

      <Footer />
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
