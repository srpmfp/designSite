import "./Nav.css";
import DS from "../../ds.jsx"
import { useEffect, useState } from "react";
const Nav = () => {

    const [location, setLocation] = useState('navLogo')

    const [cursorPosition, setCursorPosition] = useState({});
    useEffect(() => {
        const navLinks = document.querySelector('.nav');

        const handleMouseMove = (event) => {
            const rect = navLinks.getBoundingClientRect();
            setCursorPosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });

        }
        const handleMouseLeave = () => {
            const navLinks = document.querySelector('.nav');
            navLinks.style.background = 'none';
        }
        navLinks.addEventListener('mouseleave', handleMouseLeave);

        navLinks.addEventListener('mousemove', handleMouseMove);
        console.log(cursorPosition)
        return () => {
            if (cursorPosition.y >= navLinks.offsetHeight / 5)
                navLinks.removeEventListener('mousemove', handleMouseMove);
            navLinks.removeEventListener('mouseleave', handleMouseLeave);

        };
    }, []);


    // Update background on cursor position change transparent to make circle smaller
    useEffect(() => {
        const navLinks = document.querySelector('.nav');
        if (navLinks) {
            const aLinks = navLinks.querySelectorAll('a');
            aLinks.forEach(link => {
                link.style.transition = 'color 0.3s ease';
                link.style.color = `hsl(white/ ${cursorPosition.x}*${.1}})`;
            });
            navLinks.style.background = `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, var(--secondary-color-dark), transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent,transparent, transparent, transparent,transparent, transparent, transparent)`;
            navLinks.style.transition = 'color 0.3s ease';
            navLinks.style.color = `hsl(white/ ${cursorPosition.x}*${.1}})`;

        } if (cursorPosition.y > navLinks.offsetHeight) {
            navLinks.style.background = `none`;
        }
    }, [cursorPosition]);

    return (
        <nav className="nav">

            {/* logo import */}
            <div className="navLogo">
                {DS(location)}
            </div>


            <ul className="navLinks nunito-sans-nuniFont">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Mission</a></li>
                <li><a href="/team">Meet The Team</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;