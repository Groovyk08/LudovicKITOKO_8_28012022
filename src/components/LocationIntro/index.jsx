import { ads } from '../../datas/Ads'
import '../../styles/Location.css'
// import  '../../styles/Introduction.css'

const locationIntro = ({ id, title, location, tags, name, host, rating }) => {
    return (
        <div key={ads.id} className="introduction">
            <div>
                <h1 className="locationTitle">{ads.title}</h1>
                <h2 className="locationSubtitle">{ads.location}</h2>
                <ul className="tagContainer">
                    <li className="tagName">{ads.tags}</li>
                </ul>
            </div>
            <div className="owner">
                <p className="ownerName">
                    {ads.name}
                    <img className="ownerImg" src={ads.host} alt={ads.id} />
                </p>
                <div className="rating">{ads.rating}</div>
            </div>
        </div>
    )
}

export default locationIntro
