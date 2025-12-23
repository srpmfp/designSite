import "./Nav.css";
const Nav = () => {
    return (
        <nav className="nav">
            <ul className="navLinks">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Mission</a></li>
                <li><a href="/team">Meet The Team</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;