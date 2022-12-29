import styled from 'styled-components'

const DivCard = styled.div`
    width:100%;
    border-radius:10px;
    position:relative;
    padding:0% 0% 20px 0% ;
    @media screen and (min-width:780px) {
        width: 84%;
        height:340px;
        padding:0px 8% 8% 8% ;
    }
`
const ImgCard = styled.img`
  width:100%;
  height:100%;
  border-radius:10px;
  object-fit:cover;
  filter: brightness(75%);
  z-index:99;
`
const PCard = styled.p`
  display: block;
  width: 70%;
  margin: auto auto;
  position:absolute;
  z-index:100;
  color:white;
  margin-top: -80px;
  margin-left:20px;
  font-size: 1.2rem;
`
export{
    DivCard, 
    ImgCard,
    PCard
}