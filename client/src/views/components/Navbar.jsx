import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

/* 
This is my submission for the Indiviual Assignment - Practice Refactor - REFACTORED CODE

While I do believe this code is fairly code as it is, there are some thing that can be improved

1. The code has a lot of duplicated code and can be seen through all of the link components that exist
	For example all of the navbar-items are repeated and a map can be done remove the need for repeating this code
	in the future if we need add more routes to the navbar we can simply add it to some list

	REFACTORED - As we can see I have added an array that consists of all of the routes that exist within the navbar
	so we can now iterate over this array and render the components this way. If we need to add a new route we can simply
	add it to the array
2. The second issue is that the navbar is lacking accesibility to screen readers. This is very important to have
	with the context of our app because we want to make sure that everyone has the ability to use it. To improve accesibility
	to the navbar we can add aria labels that would allow the reader to hover over the text so they can be alerted of what
	each element says

	REFACTORED - I have also added aria labels to the components of every link this will allow people with certain tools to get 
	alerted on what each route is if they hover over it, while this is a small change, this is very smelly code as it hinders
	a whole group of accessing our website
*/

const navItems = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About" },
	{ path: "/contact", label: "Contact" },
	{ path: "/journal", label: "Health Journal" },
	{ path: "/login", label: "Login" },
	{ path: "/signup", label: "Sign Up" },
];

const Navbar = () => {
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
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
