import { useState } from "react";
import styles from "./index.module.css";
import sqlLogo from "./assets/sql-logo.png";

function App() {
  const [queryDescription, setQueryDescription] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");
  const sendToBackend = async (e) => {
    e.preventDefault();

    const generatedsqlQuery = await generateQuery();
    setSqlQuery(generatedsqlQuery);
    // console.log("sent by server to frontend", generateQuery);
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: queryDescription }),
    });

    const data = await response.json();
    return data.response.trim();
  };
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3>SQL-Query Generator</h3>

      <form onSubmit={sendToBackend}>
        <input
          type="text"
          name="qyery-description"
          placeholder="Enter your query Description"
          onChange={(e) => setQueryDescription(e.target.value)}
        />

        <input type="submit" value="Generate Query" />

        <pre>{sqlQuery}</pre>
      </form>
    </main>
  );
}

export default App;
