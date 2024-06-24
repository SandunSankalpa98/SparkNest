import React, { useContext, useState } from 'react';
import HomeScreen from './Screens/Home/HomeScreen';
import { ThemeContext } from './context/ThemeContext';

function App() {
  // Use useState to manage theme state
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='flex flex-col items-center p-4 md:p-10' data-theme={theme}>
        <div className='max-w-2xl w-full items-center'>
          <HomeScreen />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
