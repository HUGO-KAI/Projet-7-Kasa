import {useParams} from 'react-router-dom';
import './Logement.scss'
import Slideshow from '../../components/Slideshow/Slideshow'
import logements from "../../data/logements.json"
import Tag from '../../components/Tag/Tag'

const Logement = () => {
    let { logementId } = useParams();
    const logement = logements.find((logement) => logement.id === logementId);
    const { title, location, tags, rating, host, equipments, description, pictures } =
    logement;
    return (
        <main className='logement_main'>
            <Slideshow pictures={pictures}/>
            <div className='container_title'>
                <h1>{title}</h1>
                <p>{location}</p>
                    {tags.map((tag,index) => {
                        return(
                            <div className='tags_container' key = {index+100}>
                    <Tag 
                    tag = {tag}
                    /></div>
                        )
                })
                    }
            </div>
        </main>
    )
}

export default Logement