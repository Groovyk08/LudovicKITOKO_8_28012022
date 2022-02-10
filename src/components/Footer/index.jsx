import logoFooter from '../../assets/logoFooter.png'
import './Footer.css'
function Footer() {
    return (
        <div className="kasaFooter">
            <img className="imgFooter" src={logoFooter} alt="logo Kasa" />
            <h1 className="textFooter">© 2020 Kasa. All rights reserved</h1>
        </div>
    )
}

export default Footer
