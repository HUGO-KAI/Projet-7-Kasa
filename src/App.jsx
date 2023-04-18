import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="logements/:logementId" element={<Logement />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="/*" element={<Error />}></Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
