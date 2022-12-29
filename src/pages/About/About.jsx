import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import bannerImg from '../../assets/aboutBanner.png'
import './About.scss'
import textData from "../../data/textData";

function About() {
    return (
      <main className="ContainerMain">
        <div className="about_banner">
          <Banner image={bannerImg} />
        </div>
        <section className="about_collapse" >
          <Collapse title='Fiabilité' content={textData.fiability} className="about_collapse"/>
        </section>
        <section className="about_collapse">
          <Collapse title='Respect' content={textData.respect} className="about_collapse"/>
        </section>
        <section className="about_collapse">
          <Collapse title='Service' content={textData.service} className="about_collapse"/>
        </section>  
        <section className="about_collapse">
          <Collapse title='Sécurité' content={textData.security} className="about_collapse"/>
        </section>  
      </main>
    )
  }
  
  export default About