import styled from 'styled-components'
import Logo from '../../assets/LOGO.png'

const ContainerFooter = styled.footer`
    position: relative;
    margin-top:20px;
    width: 100%;
    height: 209px;
    background: #000000;
    div:first-child{
        position: absolute;
        left: 33.87%;
        right: 33.6%;
        top: 29.67%;
        bottom: 51.46%;
        filter: brightness(100);
        @media screen and (min-width:780px) {
        left: 45.76%;
        right: 45.76%;
        top: 31.58%;
        bottom: 49.55%;
        }
    }
    div:last-child{
        position: absolute;
        left: -18.4%;
        right: -18.4%;
        top: 48.33%;
        bottom: 29.67%;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 142.6%;
        display: flex;
        align-items: flex-end;
        text-align: center;
        color: #FFFFFF;
        @media screen and (min-width:780px){
            left: 32.15%;
            right: 32.22%;
            top: 64.11%;
            bottom: 13.88%;
            font-size: 1.5rem;
        }
    }
    span{
        display:block;
        width:100%;
    }
`

function Footer (){
    return (
            <ContainerFooter>
                <div><img src={Logo} alt='logo de kasa' /></div>
                <div><span>© 2020 Kasa. All rights reserved</span></div>
            </ContainerFooter>
    )
}

export default Footer