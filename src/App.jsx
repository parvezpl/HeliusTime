
import { useState } from 'react';
import './App.css'
import CenterBox from './componnents/home/center_box';
import { Nav } from './componnents/home/nav';

function App() {
  const [onLoginClick, setOnloginClick] = useState(false)
  console.log(onLoginClick)
  return (
    <>
      <Nav
      onLoginClick={setOnloginClick}
      // isLoginVigible={onLoginClick}
      />
      <CenterBox onLoginClick={setOnloginClick} isLoginVigible={onLoginClick}/>
    </>
  )
}

export default App
