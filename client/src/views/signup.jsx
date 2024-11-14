import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";
import { AuthorizeContext } from "../contexts/auth";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthorizeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await apiClient.register({
        firstName,
        lastName,
        email,
        password,
      });

      if (data) {
        setAuthState((state) => ({ ...state, isAuthenticated: true }));
        localStorage.setItem("user_token", data.token);
        navigate("/journal");
      } else {
        console.error(error || "Failed to register.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h1>Kanban Krusaders</h1>
      </div>
      <div style={styles.formContainer}>
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inlineFields}>
            <div style={styles.inputGroup}>
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="retypePassword">Re-type Password</label>
            <input
              type="password"
              id="retypePassword"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Submit
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
  formContainer: {
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
  inlineFields: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputGroup: {
    flex: 1,
    marginBottom: "20px",
    paddingRight: "10px",
  },
  input: {
    width: "90%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "93.5%",
    padding: "15px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
