import { Link } from "react-router-dom"

const Navbar = () => {
    return (

        <ul style={{
            background: "lightGrey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            fontSize: "3rem",
            listStyle: "none"
        }}>
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
        </ul>
    )
}

export default Navbar
