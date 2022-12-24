import Banner from "../components/Banner"
import Card from "../components/Card"
import logements from "../data/logements.json"
import styled from 'styled-components'

const CardsContainer = styled.section`
  
`

function Home() {
  return (
    <div>
      <Banner />
      <CardsContainer>
        {logements.map((logement, index) => (
          <Card
            key={`${logement.id}`}
            picture={logement.cover}
            title={logement.title}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Home