import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from '../src/components/Header'
import Home from './pages/Home'

const GlobalStyle = createGlobalStyle`
    #root {
      width:89%;
      margin:20px auto;
      font-family: Montserrat, sans-serif;
      font-size:16px;
    }
    a{
      text-decoration: none;
    }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
