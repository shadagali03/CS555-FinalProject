import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../views/components/Navbar";

// Helper function to wrap the component with BrowserRouter
const renderWithRouter = (ui) => {
	render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Navbar Component", () => {
	it("renders the logo text", () => {
		renderWithRouter(<Navbar />);
		const logoElement = screen.getByText(/My Voice Assistant/i);
		expect(logoElement).toBeInTheDocument();
	});

	it("renders all navigation links", () => {
		renderWithRouter(<Navbar />);
		const links = [
			{ label: "Home", path: "/" },
			{ label: "About", path: "/about" },
			{ label: "Contact", path: "/contact" },
			{ label: "Health Journal", path: "/journal" },
			{ label: "Login", path: "/login" },
			{ label: "Sign Up", path: "/signup" },
		];

		links.forEach((link) => {
			const linkElement = screen.getByRole("link", { name: link.label });
			expect(linkElement).toBeInTheDocument();
			expect(linkElement).toHaveAttribute("href", link.path);
		});
	});
});
