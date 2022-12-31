import {useParams} from 'react-router-dom';
import './Logement.scss'
import Slideshow from '../../components/Slideshow/Slideshow'
import logements from "../../data/logements.json"
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'

const Logement = () => {
    let { logementId } = useParams();
    const logement = logements.find((logement) => logement.id === logementId);
    const { title, location, tags, rating, host, equipments, description, pictures } =
    logement;
    return (
        <main className='logement_main'>
            <div className='slide_container'>
                <Slideshow pictures={pictures}/>
            </div>
            <div>
                <div className='container_title'>
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div className='tags_container'>
                    {tags.map((tag,index) => {
                            return(
                                <div key = {index+100} >
                                    <Tag tag = {tag}/>
                                </div>
                            )
                    })}
                    </div>
                </div>
                <div className='Rating_container'>
                    <Rating ratings={rating}/>
                    <div className='host_info'>
                        <div>{host.name}</div>
                        <img src ={host.picture} alt ='host'></img>
                    </div>
                </div>
            </div>
            <div className='collapse_container'>
                <Collapse title ='Description' content ={description} id='logement_description'/>
                <Collapse title ='Equipments' content ={equipments.map((equipment) => (
                    <p>{equipment}</p>
                )
                )} />
            </div>
        </main>
    )
}

export default Logement