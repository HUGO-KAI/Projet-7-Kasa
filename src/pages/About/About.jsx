import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import AboutStyles from './About.module.scss'
import textData from "../../data/textData";

const About =() => {
  
    return (
      <main className={AboutStyles.ContainerMain}>
        <div className={AboutStyles.about_banner}>
          <Banner />
        </div>
        <section className={AboutStyles.about_collapse} >
          <Collapse title='Fiabilité' content={textData.fiability} />
        </section>
        <section className={AboutStyles.about_collapse}>
          <Collapse title='Respect' content={textData.respect} />
        </section>
        <section className={AboutStyles.about_collapse}>
          <Collapse title='Service' content={textData.service} />
        </section>  
        <section className={AboutStyles.about_collapse}>
          <Collapse title='Sécurité' content={textData.security} />
        </section>  
      </main>
    )
  }
  
  export default About