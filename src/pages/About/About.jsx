import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import './About.scss'
import textData from "../../data/textData";

const About =() => {
  
    return (
      <main className='ContainerMain'>
        <div className='about_banner'>
          <Banner />
        </div>
        {textData.map((text, index) => (
           <section className='about_collapse' >
              <Collapse title={text.title} content={text.content} />
            </section>
        ))}
      </main>
    )
  }
  
  export default About