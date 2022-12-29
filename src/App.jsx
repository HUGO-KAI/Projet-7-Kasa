import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'
import Error from './pages/Error/Error'

const GlobalStyle = createGlobalStyle`
    #root {
      max-width:1440px;
      margin:auto auto;
      width:100%;
      font-family: Montserrat, sans-serif;
      @media screen and (min-width:780px) {
        font-size:24px;
      }
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
              <Route path="*" element={<Error />} />
            </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
