import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import bannerImg from '../../assets/aboutBanner2.png'
import './About.scss'
import textData from "../../data/textData";

function About() {
    return (
      <main className="ContainerMain">
        <div className="about_banner">
          <Banner />
        </div>
        <section className="about_collapse" >
          <Collapse title='Fiabilité' content={textData.fiability} />
        </section>
        <section className="about_collapse">
          <Collapse title='Respect' content={textData.respect} />
        </section>
        <section className="about_collapse">
          <Collapse title='Service' content={textData.service} />
        </section>  
        <section className="about_collapse">
          <Collapse title='Sécurité' content={textData.security} />
        </section>  
      </main>
    )
  }
  
  export default About