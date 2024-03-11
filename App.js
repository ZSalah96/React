
import './App.css';

import React from 'react';

import Reference from './Components/Ref';
import Memoire from './Components/Memo';
import Back from './Components/back';
import Identification from './Components/ID';
import ComponentWithLayoutEffect from './Components/Layout';


import  { createContext, useContext } from 'react';
import Counter from './Components/Reducer';


const ThemeContext = createContext('1');


const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value="2">{children}</ThemeContext.Provider>;
};


const ThemeComponent = () => {
  const theme = useContext(ThemeContext);

  return <div>The current theme is: {theme}</div>;
};

function App() {
  
  
  return (
    <div>
      <Reference/>
      <Memoire/>
      <Back/>
      <Identification/>
      <ThemeProvider>
        <ThemeComponent/>
      </ThemeProvider>
      <Counter/>
      <ComponentWithLayoutEffect/>
    </div>
  );
}


export default App;