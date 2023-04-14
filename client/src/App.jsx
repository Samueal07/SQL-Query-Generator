import { useState } from "react";
import styles from "./index.module.css";
import sqlLogo from "./assets/sql-logo.png";

function App() {
  const [queryDescription, setQueryDescription] = useState("");

  const sendToBackend = (e) => {
    e.preventDefault();
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
          onChange={() => setQueryDescription(e.target.value)}
        />

        <input type="submit" value="Generate Query" />
      </form>
    </main>
  );
}

export default App;
