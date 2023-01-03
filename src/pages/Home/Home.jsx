import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import logements from "../../data/logements.json"
import './Home.scss'
import bannerImg from '../../assets/D-banner.png'
import textData from "../../data/textData";
const slogan = textData.slogan;

function Home() {
  return (
    <main className="ContainerMain">
      <div className="Home_banner">
        <Banner image={bannerImg} text={slogan} />
      </div>
      <section className='CardsContainer'>
        {logements.map((logement, index) => (
          <div key={logement.id} className='Card_container'>
            <Card
              key={`${logement.id}-${index}`}
              id = {logement.id}
              picture={logement.cover}
              title={logement.title}
            />
          </div>
        ))}
      </section>
    </main>
  )
}

export default Home