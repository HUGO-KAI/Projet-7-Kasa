import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
    #root {
      width:100%;
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
              <Route path="about" element={<About />} />
            </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
