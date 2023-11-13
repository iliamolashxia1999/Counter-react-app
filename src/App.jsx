import "./App.css";
import Calculator from "./components/Counter.jsx";
import {useState, createContext,} from "react";
import Switch from "react-switch";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const themeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = function(){
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <div className="toggle">
      <DarkModeSwitch
      onChange={toggleTheme}
      checked={theme==="dark"}/>
      </div>
      <Calculator/>
    
    </div>
    </themeContext.Provider>
  );
}

export {App};