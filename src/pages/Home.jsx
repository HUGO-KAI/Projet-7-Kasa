import Banner from "../components/Banner"
import Card from "../components/Card"
import logements from "../data/logements.json"
import styled from 'styled-components'

const CardsContainer = styled.section`
  margin-bottom:20px;
`
const ContainerMain = styled.main`
  width:90%;
  margin:auto auto;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      
        width:89%;
        font-size: 16px;
      
    }
  }
`

function Home() {
  return (
    <ContainerMain>
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
    </ContainerMain>
  )
}

export default Home