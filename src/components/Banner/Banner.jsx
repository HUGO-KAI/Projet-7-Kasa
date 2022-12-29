
import '../../styles/base.css'
import bannerImg from '../../assets/D-banner.png'
import './Banner.scss'



function Banner() {
    return (
      <section className="BannerContainer">
        <img src={bannerImg} alt='' />
        <h2 > Chez vous, <div>partout et ailleurs</div></h2>
      </section>
    )
  }
  
  export default Banner