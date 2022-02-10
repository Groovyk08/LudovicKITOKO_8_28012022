import { Link } from 'react-router-dom'
import errorLogo from '../../assets/errorLogo.png'
import '../../styles/Error.css'

function Error() {
    return (
        <section className="errorPage">
            <img className="imgError" src={errorLogo} alt="error 404" />
            <h1 className="errorText">
                Oups! La page que vous demandez n'existe pas.
            </h1>
            <Link className="errorLink" to="/">
                Retourner sur la page d'accueil
            </Link>
        </section>
    )
}

export default Error
