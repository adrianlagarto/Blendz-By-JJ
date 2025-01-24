import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BookNow from "./pages/Booknow";
import Admin from "./pages/Admin/Admin";
import Navbar from "./components/Navbar";
import PrivateRoute from './components/'

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const res = await axios.get("http://127.0.0.1:5070/api/users");
    setArray(res.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {/*Add navbar to all routes*/}
      <Router>
        <Navbar /> {/* Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
              <Admin />
          </PrivateRoute>
        </Routes>
      </Router>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          {array.map((user, index) => (
            <div key={index}>
              <span>{user}</span>
              <br />
            </div>
          ))}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
