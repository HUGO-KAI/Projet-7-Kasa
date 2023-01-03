import { Link } from 'react-router-dom'
import './Error.scss'

function Error404() {
    return (
        <main>
            <div className='Error404'>404</div>
            <div className='Error_message'><span>Oups! La page que &nbsp;</span><span>vous demandez n'existe pas.</span></div>
            <Link to='/' className='Error_return'>Retourner sur la page d’accueil</Link>
        </main>
       
    )
}

export default Error404