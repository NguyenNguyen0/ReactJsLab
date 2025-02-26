import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BaiTap01 from './components/BaiTap01/BaiTap01';
import BaiTap02 from './components/BaiTap02/BaiTap02';
import BaiTap03 from './components/BaiTap03/BaiTap03';

function App() {
  

  return (
    <>
      <BaiTap01 />
      <hr />
      <BaiTap02 />
      <hr />
      <BaiTap03 />
    </>
  )
}

export default App
