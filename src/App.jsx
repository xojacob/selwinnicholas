import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./components";
import "./App.css";
import styles from "./style";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={`${styles.boxWidth}`}>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
