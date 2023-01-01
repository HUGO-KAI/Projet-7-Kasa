import { Link } from 'react-router-dom'
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import logements from "../../data/logements.json"
import styled from 'styled-components'
import './Home.scss'
import bannerImg from '../../assets/D-banner.png'
import textData from "../../data/textData";
const slogan = textData.slogan;

const CardsContainer = styled.section`
  width:90%;
  margin:auto auto;
  @media screen and (min-width:768px) {
    width:86%;
    display: grid;
    grid-template-columns: auto auto auto;
    background: #F6F6F6;
    border-radius: 25px;
    padding: 50px 0px 20px 0px;
  }
`

function Home() {
  return (
    <main className="ContainerMain">
      <div className="Home_banner">
        <Banner image={bannerImg} text={slogan} />
      </div>
      <CardsContainer>
        {logements.map((logement, index) => (
          <Link key={logement.id} to={`/logements/${logement.id}`}>
            <Card
              key={`${logement.id}-${index}`}
              picture={logement.cover}
              title={logement.title}
            />
          </Link>
        ))}
      </CardsContainer>
    </main>
  )
}

export default Home