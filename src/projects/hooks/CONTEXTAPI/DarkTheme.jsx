import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Dark');

  const handleToggleButton = () => {
    setTheme((prevTheme) => (prevTheme === 'Dark' ? 'Light' : 'Dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleButton }}>{children}</ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleToggleButton } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen min-w-screen ${theme === 'Dark' ? 'bg-gray-800 text-white! ' : 'bg-white text-black!'}`}
    >
      <h1>Light Dark Theme</h1>
      <button
        onClick={handleToggleButton}
        className=" bg-blue-500 hover:bg-blue-800 text-white rounded-md text-5xl p-[40px]! "
      >
        {theme === 'Dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
};
