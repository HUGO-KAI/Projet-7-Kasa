import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Logement from './pages/Logement/Logement'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'
import Error from './pages/Error/Error'
import './App.css'

//React Router
function App() {
  return (
    <div>
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
