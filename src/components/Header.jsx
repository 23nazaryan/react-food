import {Link} from "react-router-dom";

function Header() {
    return (<div className="navbar-fixed">
        <nav className="cyan darken-4">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React Foods</Link>
                <ul className="right">
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>)
}

export default Header