import styled from 'styled-components'
import Logo from '../../assets/LOGO.png'

const ContainerFooter = styled.footer`
    
    margin-top:20px;
    width: 100%;
    height: 209px;
    background: #000000;
    div:first-child{
        width:122px;
        margin:auto auto;
        padding-top:66px;
        filter: brightness(100);
        @media screen and (min-width:780px) {
           
        }
    }
    div:last-child{
        font-size:12px;
        padding-top:32px;
        
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        
        line-height: 142.6%;
        display: flex;
        align-items: flex-end;
        text-align: center;
        color: #FFFFFF;
        @media screen and (min-width:768px){
           
            font-size:24px;
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