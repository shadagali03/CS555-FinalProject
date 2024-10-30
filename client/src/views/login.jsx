import React, { useState } from "react";
//referenced https://javascript.plainenglish.io/build-a-simple-react-login-form-using-event-handlers-and-react-hook-4afb11391e48
//https://www.freecodecamp.org/news/usestate-hook-3-different-examples/
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Logging in with:", email, password);
    fetch('http://localhost:3000/api/users/login',{
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    this.context.router.push('client/src/views/home.jsx');
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
          //referenced https://stackoverflow.com/questions/71536244/check-username-password-login-form-using-react-hooks
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

