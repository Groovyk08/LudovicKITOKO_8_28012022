import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

function Header() {
    return (
        <div className="banner">
            <img className="kasaLogo" src={logo} alt="KASA" />
            <nav className="navHeader">
                <Link className="navLink" to="/">
                    Accueil
                </Link>
                <Link className="navLink" to="/About">
                    A Propos
                </Link>
            </nav>
        </div>
    )
}

export default Header
