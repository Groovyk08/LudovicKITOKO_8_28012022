import { useState } from 'react'
import vector from '../../assets/vector.png'
import './Dropdown.css'

const Dropdown = ({ title, children }) => {
    const [open, setOpen] = useState(false)
    return (
        <button className="dropdown" onClick={() => setOpen(!open)}>
            <h1 className="dropdownText"> {title} </h1>
            <span>
                <img
                    className="collapsible"
                    src={vector}
                    alt="vectorIcon"
                ></img>
                {open && <div className="description">{children}</div>}
            </span>
        </button>
    )
}

export default Dropdown
