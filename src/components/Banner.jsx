import styled from 'styled-components'
import '../styles/base.css'
import bannerImg from '../assets/Banner.png'

const BannerContainer = styled.section`
  width:100%;
  height: 111px;
  margin-bottom:20px;
  border-radius:10px;
  background-image: url(${bannerImg}),linear-gradient(#F6F6F6, #000000); 
  
  background-size: cover;
  postion:relative;
  h2{
    position:absolute;
  }
`

function Banner() {
    return (
      <BannerContainer>
        <h2 style={{color:'white'}}> Chez vous, partout et ailleurs</h2>
      </BannerContainer>
    )
  }
  
  export default Banner