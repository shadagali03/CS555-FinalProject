import React, { useState } from "react";

export const Journal = () => {
  const [activeSection, setActiveSection] = useState("Entries");
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState("");
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const [reminders, setReminders] = useState([]);
  const [reminder, setReminder] = useState("");

  const handleAddEntry = () => {
    if (entry.trim()) {
      setEntries([...entries, entry]);
      setEntry("");
    }
  };

  const handleAddGoal = () => {
    if (goal.trim()) {
      setGoals([...goals, goal]);
      setGoal("");
    }
  };

  const handleAddReminder = () => {
    if (reminder.trim()) {
      setReminders([...reminders, reminder]);
      setReminder("");
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Entries":
        return (
          <div style={styles.sectionContent}>
            <h2>Journal Entries</h2>
            <div style={styles.entryForm}>
              <textarea
                style={styles.input}
                placeholder="Write your entry here..."
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
              <button style={styles.button} onClick={handleAddEntry}>
                Add Entry
              </button>
            </div>
            <div style={styles.entries}>
              {entries.length > 0 ? (
                entries.map((entry, index) => (
                  <div key={index} style={styles.entry}>
                    {entry}
                  </div>
                ))
              ) : (
                <p>No entries yet. Start writing to keep track of your health!</p>
              )}
            </div>
          </div>
        );
      case "Goals":
        return (
          <div style={styles.sectionContent}>
            <h2>Health Goals</h2>
            <div style={styles.entryForm}>
              <input
                style={styles.input}
                placeholder="Set a health goal..."
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
              <button style={styles.button} onClick={handleAddGoal}>
                Add Goal
              </button>
            </div>
            <div style={styles.entries}>
              {goals.length > 0 ? (
                goals.map((goal, index) => (
                  <div key={index} style={styles.entry}>
                    {goal}
                  </div>
                ))
              ) : (
                <p>No goals set yet. Start adding goals to stay motivated!</p>
              )}
            </div>
          </div>
        );
      case "Reminders":
        return (
          <div style={styles.sectionContent}>
            <h2>Daily Reminders</h2>
            <div style={styles.entryForm}>
              <input
                style={styles.input}
                placeholder="Add a reminder..."
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
              />
              <button style={styles.button} onClick={handleAddReminder}>
                Add Reminder
              </button>
            </div>
            <div style={styles.entries}>
              {reminders.length > 0 ? (
                reminders.map((reminder, index) => (
                  <div key={index} style={styles.entry}>
                    {reminder}
                  </div>
                ))
              ) : (
                <p>No reminders set yet. Start adding reminders for daily tasks!</p>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>Health Journal</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem} onClick={() => setActiveSection("Entries")}>Entries</li>
          <li style={styles.navItem} onClick={() => setActiveSection("Goals")}>Goals</li>
          <li style={styles.navItem} onClick={() => setActiveSection("Reminders")}>Reminders</li>
        </ul>
      </div>
      <div style={styles.journalContent}>
        {renderSection()}
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    textAlign: "center",
  },
  navItem: {
    cursor: "pointer",
    padding: "10px",
    fontSize: "18px",
    color: "white",
  },
  journalContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  sectionContent: {
    width: "100%",
    maxWidth: "600px",
  },
  entryForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4A8670",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
  entries: {
    width: "100%",
    marginTop: "20px",
  },
  entry: {
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderRadius: "4px",
    marginBottom: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
};