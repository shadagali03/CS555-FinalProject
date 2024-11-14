import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../views/components/Navbar";
import { AuthorizeContext } from "../contexts/auth";

// Helper function to wrap the component with BrowserRouter and context
const renderWithRouterAndContext = (ui, { isAuthenticated = false } = {}) => {
  render(
    <AuthorizeContext.Provider
      value={{
        authState: { isAuthenticated },
        logoutUser: jest.fn(),
      }}
    >
      <BrowserRouter>{ui}</BrowserRouter>
    </AuthorizeContext.Provider>
  );
};

describe("Navbar Component", () => {
  it("renders the logo text", () => {
    renderWithRouterAndContext(<Navbar />);
    const logoElement = screen.getByText(/My Voice Assistant/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("renders all navigation links when logged out", () => {
    renderWithRouterAndContext(<Navbar />, { isAuthenticated: false });
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

  it("renders logout button and navigation links when logged in", () => {
    renderWithRouterAndContext(<Navbar />, { isAuthenticated: true });
    const links = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Health Journal", path: "/journal" },
      { label: "Voice Recorder", path: "/voiceRecorder" },
    ];

    links.forEach((link) => {
      const linkElement = screen.getByRole("link", { name: link.label });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.path);
    });

    // Check for the logout button
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
