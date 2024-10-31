import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import { AuthorizeContext } from "../contexts/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthorizeContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data, error, message } = await apiClient.login({
        email,
        password,
      });
      if (data) {
        setAuthState((state) => ({ ...state, isAuthenticated: true }));
        localStorage.setItem("user_token", data.token);
        navigate("/journal");
      } else {
        console.error(error || message);
      }
    } catch (err) {
      const message = err?.response?.data?.error?.message;
      console.error(message || err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h1>Kanban Krusaders</h1>
      </div>
      <div style={styles.loginForm}>
        <h2>Log in</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <div style={styles.links}>
            <a href="#">Forgot Your Password?</a>
            <a href="#">Don’t Have an Account?</a>
          </div>
          <button type="submit" style={styles.button}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    backgroundColor: "#4A8670",
    color: "white",
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  loginForm: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    padding: "15px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
