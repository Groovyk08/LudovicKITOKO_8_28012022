//import ads from '../../datas/Ads'
import './Introduction.css'

function LocationIntro(id, title, location, tags, name, host, rating) {
    return (
        <div key={id} className="introduction">
            <div>
                <h1 className="locationTitle">{title}</h1>
                <h2 className="locationSubtitle">{location}</h2>
                <ul className="tagContainer">
                    <li className="tagName">{tags}</li>
                </ul>
            </div>
            <div className="owner">
                <p className="ownerName">
                    {name}
                    <img className="ownerImg" src={host} alt={id} />
                </p>
                <div className="rating">{rating}</div>
            </div>
        </div>
    )
}

export default LocationIntro
