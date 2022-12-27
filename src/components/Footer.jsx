import styled from 'styled-components'
import Logo from '../assets/LOGO.png'

const ContainerFooter = styled.footer`
    width:100%;
    height:209px;
    background:#000000;
    position:relative;
    display:flex;
    img{
        width:32%;
        margin:auto auto;
        display:block;
        filter: brightness(100);
    }
`

function Footer (){
    return (
            <ContainerFooter>
                <img src={Logo} alt='logo de kasa' />
            </ContainerFooter>
    )
}

export default Footer