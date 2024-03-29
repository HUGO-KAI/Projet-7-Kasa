import React from 'react'
import {useParams} from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow'
import logements from "../../data/logements.json"
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../Error/Error'
import './Logement.scss'

const Logement = () => {
    let { logementId } = useParams();
    const logement = logements.find((logement) => logement.id === logementId);
    if (!logement) return <Error />;
    const { title, location, tags, rating, host, equipments, description, pictures } =
    logement;
    return (
        <main className='logement_main'>
            <div className='slide_container'>
                <Slideshow pictures={pictures}/>
            </div>
            <div className='info_header'>
                <div className='container_title'>
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div className='tags_container'>
                    {tags.map((tag,index) => {
                            return(
                                <React.Fragment key = {index+100} >
                                    <Tag tag = {tag}/>
                                </React.Fragment>
                            )
                    })}
                    </div>
                </div>
                <div className='Rating_container'>
                    <Rating ratings={rating}/>
                    <div className='host_info'>
                        <div><span>{host.name}</span></div>
                        <img src ={host.picture} alt ='host'></img>
                    </div>
                </div>
            </div>
            <div className='collapse_container'>
                <Collapse title ='Description' content ={description} />
                <Collapse title ='Equipments'  content ={equipments.map((equipment,index) => (
                    <p key={index} >{equipment}</p>
                )
                )} />
            </div>
        </main>
    )
}

export default Logement