
import '../../styles/base.css'
import bannerImg from '../../assets/Banner.png'
import './Banner.scss'



function Banner() {
    return (
      <section className="BannerContainer">
        <img src={bannerImg} alt='' />
        <h2 > Chez vous, <br /> partout et ailleurs</h2>
      </section>
    )
  }
  
  export default Banner