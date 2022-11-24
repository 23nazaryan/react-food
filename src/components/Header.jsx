import {Link} from "react-router-dom";

function Header() {
    return (<div className="navbar-fixed">
        <nav className="cyan darken-4">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React Foods</Link>
            </div>
        </nav>
    </div>)
}

export default Header