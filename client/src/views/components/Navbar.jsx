import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<h1 className="navbar-logo">My Voice Assistant</h1>
				<ul className="navbar-menu">
					<li className="navbar-item">
						<Link to="/" className="navbar-link">
							Home
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/voiceRecorder" className="navbar-link">
							Voice Recorder
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
};

export default Navbar;
