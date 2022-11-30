// import PropTypes from 'prop-types'
import './LocationCard.css'

// Template  d'une carte location
function LocationCard(props) {
    return (
        <div className="card">
            <img
                className="imgCard"
                src={props.location.cover}
                alt={props.location.id}
            />
            <div className="cardTitle">
                <h1>{props.location.title}</h1>
            </div>
        </div>
    )
}
export default LocationCard
