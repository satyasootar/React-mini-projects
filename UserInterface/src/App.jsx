import User from "./Components/User";
import Emp from "./Components/Emp";
import { useContext } from "react";
import { ThemeContext } from "./Components/Context/ThemeContext";
import Nav from "./Components/Nav";
import { AuthContext } from "./Components/Context/AuthContext";

function App() {
  let { theme, toggleTheme } = useContext(ThemeContext);
  let isLoggedIn = useContext(AuthContext);

  
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "Dark" ? "black" : "white",
        height: "100vh",
        color: theme === "Dark" ? "white" : "black",
      }}
    >
      <Nav />

      <h1>My theme mode is: {theme}</h1>
      <button onClick={toggleTheme} disabled={!isLoggedIn}>
        Change theme
      </button>
    </div>
  );
}

export default App;
