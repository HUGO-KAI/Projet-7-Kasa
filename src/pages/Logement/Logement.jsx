import { useSearchParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow'
import logements from "../../data/logements.json"
const url = window.location.href

const Logement = () => {
    console.log(url)
    //const logement = logements.find((logement) => logement.id === logementtId);
    //console.log(logement)
    return (
        <body>
            
            <Slideshow />
            
        </body>
    )
}

export default Logement