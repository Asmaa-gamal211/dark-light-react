import useLocalStorage from "use-local-storage";
import "./App.css";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="container" data-theme={theme}>
      <span className="span">Dark or Light Mood</span>
      <button className="button" onClick={switchTheme}>
        Switch to {theme === "light" ? "dark" : "light"} Theme
      </button>
    </div>
  );
}

export default App;
