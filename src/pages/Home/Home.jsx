import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card"
import logements from "../../data/logements.json"
import styled from 'styled-components'
import './Home.scss'

const CardsContainer = styled.section`
  margin-bottom:20px;
`

function Home() {
  return (
    <main className="ContainerMain">
      <Banner />
      <CardsContainer>
        {logements.map((logement, index) => (
          <Card
            key={`${logement.id}-${index}`}
            picture={logement.cover}
            title={logement.title}
          />
        ))}
      </CardsContainer>
    </main>
  )
}

export default Home