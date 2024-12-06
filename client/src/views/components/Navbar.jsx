import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFire } from "react-icons/fa"; // Import the fire icon
import { AuthorizeContext } from "../../contexts/auth";
import "../../styles/Navbar.css";

const navAuthItems = [
  { path: "/home", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/journal", label: "Health Journal" },
  { path: "/voiceRecorder", label: "Voice Recorder" },
];

const navNonAuthItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { authState, logoutUser } = useContext(AuthorizeContext);
  console.log(authState);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/"); // Navigate to the homepage after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">My Voice Assistant</h1>
        <ul className="navbar-menu">
          {authState.isAuthenticated
            ? navAuthItems.map((item, index) => (
                <li key={index} className="navbar-item">
                  <Link
                    to={item.path}
                    className="navbar-link"
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))
            : navNonAuthItems.map((item, index) => (
                <li key={index} className="navbar-item">
                  <Link
                    to={item.path}
                    className="navbar-link"
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          {authState.isAuthenticated ? (
            <>
              <li className="navbar-item streak-counter">
                <FaFire className="streak-icon" aria-label="Streak Icon" />
                <span className="streak-number" aria-label="Streak Count">
                  {authState.user?.streaks}
                </span>
              </li>
              <li className="navbar-item">
                <button
                  onClick={handleLogout}
                  className="navbar-link"
                  aria-label="Logout"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link" aria-label="Login">
                  Login
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/signup" className="navbar-link" aria-label="Sign Up">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
