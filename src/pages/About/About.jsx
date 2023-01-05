import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import AboutSyles from './About.module.scss'
import textData from "../../data/textData";

function About() {
    return (
      <main className={AboutSyles.ContainerMain}>
        <div className={AboutSyles.about_banner}>
          <Banner />
        </div>
        <section className={AboutSyles.about_collapse} >
          <Collapse title='Fiabilité' content={textData.fiability} />
        </section>
        <section className={AboutSyles.about_collapse}>
          <Collapse title='Respect' content={textData.respect} />
        </section>
        <section className={AboutSyles.about_collapse}>
          <Collapse title='Service' content={textData.service} />
        </section>  
        <section className={AboutSyles.about_collapse}>
          <Collapse title='Sécurité' content={textData.security} />
        </section>  
      </main>
    )
  }
  
  export default About