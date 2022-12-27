import styled from 'styled-components'
import '../styles/base.css'
import bannerImg from '../assets/Banner.png'

const BannerContainer = styled.section`
  width:100%;
  height: 111px;
  margin-bottom:20px;
  postion:relative;
  img{
    filter:brightness(75%);
    border-radius:10px;
  }
  h2{
    width:60%;
    color:#FFFFFF;
    position:absolute;
    margin-top:-85px;
    margin-left:16px;
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`

function Banner() {
    return (
      <BannerContainer>
        <img src={bannerImg} alt='' />
        <h2 > Chez vous, <br /> partout et ailleurs</h2>
      </BannerContainer>
    )
  }
  
  export default Banner