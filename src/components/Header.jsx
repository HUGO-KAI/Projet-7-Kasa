import Logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../styles/base.css'
import colors from '../utils/colors'

const HeaderContainer = styled.header`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
const LogoContainer = styled.div`
  width:42%;
`
const NavContainer = styled.nav`
  width:42%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    font-weight: 500;
    color:${colors.primary};
    &:hover,
    active{
      border-bottom: 1px solid;
    }
  }
`

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={Logo} alt='logo de kasa' />
      </LogoContainer>
      <NavContainer>
        <Link>Acceuil</Link>
        <Link>A Propos</Link>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header