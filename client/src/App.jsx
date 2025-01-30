import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import BookNow from "./pages/Booknow";
import Admin from "./pages/Admin/Admin";
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Simulate authentication and admin check
    setIsAuthenticated(true); // Set to true if the user is authenticated
    setIsAdmin(true); // Set to true if the user is an admin
  }, []);

  const handleLogout = async () => {
    console.log("const_handleLogout");
    try {
      await axios.post("http://127.0.0.1:5070/logout");
      setIsAuthenticated(false);
      setIsAdmin(false);
    } catch (error) {
      if (!error.response) {
        console.error("Network error:", error);
      } else {
        console.error("Error response:", error.response);
      }
    }
  };

  return (
    <>
      {/* Add navbar to all routes*/}
      <Router>
        {!isAdmin ? <AdminNavbar /> : <Navbar />}{" "}
        {/* Conditionally render AdminNavbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated} isAdmin={isAdmin}>
                <Admin handleLogout={handleLogout} />
              </PrivateRoute>
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>

      <Footer />

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
