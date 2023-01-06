import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import logements from "../../data/logements.json"
import HomeStyles from './Home.module.scss'
const slogan = "Chez vous, partout et ailleurs";

function Home() {
  return (
    <main className={HomeStyles.ContainerMain}>
      <div className={HomeStyles.Home_banner}>
        <Banner text={slogan} />
      </div>
      <section className={HomeStyles.CardsContainer}>
        {logements.map((logement, index) => (
          <div key={logement.id} className={HomeStyles.Card_container}>
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