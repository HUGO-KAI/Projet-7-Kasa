import Logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'
import HeaderStyles from './Header.module.scss'

function Header() {
  return (
    <header className={HeaderStyles.HeaderContainer}>
      <Link to="/" className={HeaderStyles.LogoContainer}>
        <img src={Logo} alt='logo de kasa' />
      </Link>
      <nav className={HeaderStyles.NavContainer}>
        <Link to="/">Acceuil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header