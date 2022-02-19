import react, { useState } from 'react'
import './Carousel.css'
import vector from '../../assets/vector.png'

export const CarouselItem = ({ children }) => {
    return <div className="carouselItem">{children}</div>
}

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = react.Children.count(children) - 1
        } else if (newIndex >= react.Children.count(children)) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    return (
        <div className="carousel">
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {react.Children.map(children, (child, index) => {
                    return react.cloneElement(child)
                })}
            </div>

            {/* Bouttons des slides */}

            <button
                className="prev"
                onClick={() => {
                    updateIndex(activeIndex - 1)
                }}
            >
                <img className="collapsible" src={vector} alt="vectorIcon" />
            </button>

            {react.Children.map(children, (child, index) => {
                return (
                    <div
                        className="numberText"
                        onClick={() => {
                            updateIndex(index)
                        }}
                    >
                        {index}/{index + 1}
                    </div>
                )
            })}

            <button
                className="next"
                onClick={() => {
                    updateIndex(activeIndex + 1)
                }}
            >
                <img className="collapsible" src={vector} alt="vectorIcon" />
            </button>
        </div>
    )
}

export default Carousel
