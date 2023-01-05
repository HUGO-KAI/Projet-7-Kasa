import React from 'react'
import {useParams} from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery'
import logements from "../../data/logements.json"
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../Error/Error'
import LogementStyle from './Logement.module.scss'

const Logement = () => {
    let { logementId } = useParams();
    const logement = logements.find((logement) => logement.id === logementId);
    if (!logement) return <Error />;
    const { title, location, tags, rating, host, equipments, description, pictures } =
    logement;
    return (
        <main className={LogementStyle.logement_main}>
            <div className={LogementStyle.slide_container}>
                <Gallery pictures={pictures}/>
            </div>
            <div className={LogementStyle.info_header}>
                <div className={LogementStyle.container_title}>
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div className={LogementStyle.tags_container}>
                    {tags.map((tag,index) => {
                            return(
                                <React.Fragment key = {index+100} >
                                    <Tag tag = {tag}/>
                                </React.Fragment>
                            )
                    })}
                    </div>
                </div>
                <div className={LogementStyle.Rating_container}>
                    <Rating ratings={rating}/>
                    <div className={LogementStyle.host_info}>
                        <div><span>{host.name}</span></div>
                        <img src ={host.picture} alt ='host'></img>
                    </div>
                </div>
            </div>
            <div className={LogementStyle.collapse_container}>
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