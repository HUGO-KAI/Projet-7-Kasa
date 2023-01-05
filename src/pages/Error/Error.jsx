import { Link } from 'react-router-dom'
import ErrorStyles from './Error.module.scss'

function Error404() {
    return (
        <main>
            <div className={ErrorStyles.Error404}>404</div>
            <div className={ErrorStyles.Error_message}><span>Oups! La page que &nbsp;</span><span>vous demandez n'existe pas.</span></div>
            <Link to='/' className={ErrorStyles.Error_return}>Retourner sur la page d’accueil</Link>
        </main>
       
    )
}

export default Error404