import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthorizeContext } from "../../contexts/auth";
import "../../styles/Navbar.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/journal", label: "Health Journal" },
  { path: "/voiceRecorder", label: "Voice Recorder" },
];

const Navbar = () => {
<<<<<<< HEAD
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<h1 className="navbar-logo">My Voice Assistant</h1>
				<ul className="navbar-menu">
					<li className="navbar-item">
						<Link to="/home" className="navbar-link">
							Home
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/about" className="navbar-link">
							About
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/contact" className="navbar-link">
							Contact
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/journal" className="navbar-link">
							Health Journal
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/login" className="navbar-link">
							Login
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/signup" className="navbar-link">
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
=======
  const { authState, logoutUser } = useContext(AuthorizeContext);
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
          {navItems.map((item, index) => (
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
>>>>>>> fa90a78cab85439f0b9dd5255af564d1d998e986
};

export default Navbar;
