import sectionHome from '../../assets/sectionHome.png'
import sectionHomeResponsive from '../../assets/sectionHomeResponsive.png'
import '../../styles/Home.css'
import ads from '../../datas/Ads'
import '../../components/LocationCard/index.jsx'
import LocationCard from '../../components/LocationCard/index.jsx'

function Home() {
    return (
        <div>
            <section className="imgSectionHome">
                <img
                    className="imgHome"
                    src={sectionHome}
                    alt="Chez vous, partout ailleurs"
                ></img>
                <img
                    className="imgHomeResponsive"
                    src={sectionHomeResponsive}
                    alt="Chez vous, partout ailleurs"
                ></img>
            </section>

            <section className="cardContainer">
                {ads.map((location, index) => (
                    <LocationCard location={location} key={index} />
                ))}
            </section>
        </div>
    )
}

export default Home
