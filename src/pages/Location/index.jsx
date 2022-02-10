import '../../styles/Location.css'
import imgCarrousel from '../../assets/imgCarrousel.png'
import host from '../../assets/host.png'
import Dropdown from '../../components/Dropdown'

function Location() {
    return (
        <div>
            <section className="locationContainer">
                <img
                    className="imgLocation"
                    src={imgCarrousel}
                    alt="img Carrousel"
                />
            </section>
            <div className="introduction">
                <div>
                    <h1 className="locationTitle">
                        Cozy loft on the Canal Saint-Martin
                    </h1>
                    <h2 className="locationSubtitle">Paris, île-de-France</h2>
                    <div className="tagContainer">
                        <button className="tagName">tag-name</button>
                        <button className="tagName">tag-name</button>
                        <button className="tagName">tag-name</button>
                    </div>
                </div>
                <div className="owner">
                    <p className="ownerName">
                        Alexandre Dumas
                        <img className="ownerImg" src={host} alt="img host" />
                    </p>
                    <div className="rating">********</div>
                </div>
            </div>
            <div className="dropdownContainer">
                <Dropdown title={'Description'}>
                    <p>
                        Vous serez à 50m du canal Saint-martin où vous pourrez
                        pique-niquer l'été et à côté de nombreux bars et
                        restaurants. Au cœur de Paris avec 5 lignes de métro et
                        de nombreux bus. Logement parfait pour les voyageurs en
                        solo et les voyageurs d'affaires. Vous êtes à1 station
                        de la gare de l'est (7 minutes à pied).
                    </p>
                </Dropdown>
                <Dropdown title={'Equipements'}>
                    <li>Climatisation</li>
                    <li>Wi-Fi</li>
                    <li>Cuisine</li>
                    <li>Espace de Travail</li>
                    <li>Fer à repasser</li>
                    <li>Sèche-cheveux</li>
                    <li>Cintres</li>
                </Dropdown>
            </div>
        </div>
    )
}
export default Location
