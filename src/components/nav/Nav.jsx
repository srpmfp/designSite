import "./Nav.css";
const Nav = () => {
    return (
        <nav className="nav">
            <ul className="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
        </nav>
    )
}

export default Nav;