import Logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'
import '../../styles/base.css'

import './Header.scss'

function Header() {
  return (
    <header className="HeaderContainer">
      <Link to="/home" className='LogoContainer'>
        <img src={Logo} alt='logo de kasa' />
      </Link>
      <nav className='NavContainer'>
        <Link to="/home">Acceuil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header