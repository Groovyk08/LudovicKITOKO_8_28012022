import '../../styles/About.css'
import sectionAbout from '../../assets/sectionAbout.png'
import Dropdown from '../../components/Dropdown'

function About() {
    return (
        <div>
            <img
                className="imgSectionAbout"
                src={sectionAbout}
                alt="imgSectionAbout"
            ></img>
            <section className="containerAbout">
                <Dropdown title={'Fiabilité'}>
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </p>
                </Dropdown>
                <Dropdown title={'Respect'}>
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Dropdown>
                <Dropdown title={'Service'}>
                    <p>
                        Nos équipes se tiennent à votre disposition pour vous
                        fournir une expérience parfaite. N'hésitez pas à nous
                        contacter si vous avez la moindre question.
                    </p>
                </Dropdown>
                <Dropdown title={'Responsabilité'}>
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Dropdown>
            </section>
        </div>
    )
}

export default About
/**<button className="dropdown">
                    <h1 className="dropdownText"> Fiabilité </h1>
                    <span>
                        <img
                            className="collapsible"
                            src={vector}
                            alt="vectorIcon"
                        ></img>
                        <div className="description">
                            Les annonces postées sur Kasa garantissent une
                            fiabilité totale. Les photos sont conformes aux
                            logements, et toutes les informations sont
                            régulièrement vérifiées par nos équipes.
                        </div>
                    </span>
                </button>
                <button className="dropdown">
                    <h1 className="dropdownText"> Respect </h1>
                    <img
                        className="collapsible"
                        src={vector}
                        alt="vectorIcon"
                    ></img>
                    <div className="description">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </div>
                </button>
                <button className="dropdown">
                    <h1 className="dropdownText"> Service </h1>
                    <img
                        className="collapsible"
                        src={vector}
                        alt="vectorIcon"
                    ></img>
                    <div className="description">
                        Nos équipes se tiennent à votre disposition pour vous
                        fournir une expérience parfaite. N'hésitez pas à nous
                        contacter si vous avez la moindre question.
                    </div>
                </button>
                <button className="dropdown">
                    <h1 className="dropdownText"> Responsabiltié </h1>
                    <img
                        className="collapsible"
                        src={vector}
                        alt="vectorIcon"
                    ></img>
                    <div className="description">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </div>
                </button> */
