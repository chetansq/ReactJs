import React from 'react'
import { useState } from 'react'
import Card1 from './Card1';
import Button from './Button';
import { createContext } from 'react';


export const ChangeTheme = createContext();
export const ThemeChangeBtn = createContext();

const Theme = () => {

  const [themes, setTheme] = useState("bg-white");
  const [count, setcount] = useState(true);
  console.log('themes', themes);

  const setNewTheme = () => {
    if (count === true) {
      setTheme('bg-black');
      setcount(false);
    }
    else {
      setTheme('bg-white');
      setcount(true);
    }
  }

  return (
    <div>

      <ChangeTheme.Provider value={themes}>
        <ThemeChangeBtn.Provider value={setNewTheme}>

          <Card1 />
        </ThemeChangeBtn.Provider>
      </ChangeTheme.Provider>



    </div>
  )
}

export default Theme
