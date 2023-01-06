import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Logement from './pages/Logement/Logement'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'
import Error from './pages/Error/Error'

const GlobalStyle = createGlobalStyle`
    #root {
      min-width:375px;
      max-width:1440px;
      margin:auto auto;
      width:100%;
      font-family: Montserrat, sans-serif;
      box-sizing: border-box;
    }
    a{
      text-decoration: none;
    }
    img{
      width:100%;
      object-fit: cover;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="logements/:logementId" element={<Logement />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
