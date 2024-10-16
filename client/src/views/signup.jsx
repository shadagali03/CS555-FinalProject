import React from "react";
//referenced https://javascript.plainenglish.io/build-a-simple-react-login-form-using-event-handlers-and-react-hook-4afb11391e48
//https://www.freecodecamp.org/news/usestate-hook-3-different-examples/
export const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const retypePassword = e.target.retypePassword.value.trim();


    if (password !== retypePassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Account created for:", firstName, lastName, email);
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
              <input type="text" id="firstName" name="firstName" style={styles.input} required />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" style={styles.input} required />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" style={styles.input} required />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="retypePassword">Re-type Password</label>
            <input
              type="password"
              id="retypePassword"
              name="retypePassword"
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

