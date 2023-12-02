"use client";

const { createContext, useState, useContext, useEffect } = require("react");

// create Context
export const ThemeContext = createContext();

// create Provider
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(null);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  //   Setting mode by default
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
