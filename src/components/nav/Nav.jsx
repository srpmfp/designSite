import "./Nav.css";
import { useEffect, useState } from "react";
const Nav = () => {


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

        navLinks.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (cursorPosition.y > navLinks.offsetHeight)
                navLinks.removeEventListener('mousemove', handleMouseMove);
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
            navLinks.style.background = `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, var(--primary-color-dark), transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent, transparent,transparent, transparent, transparent,transparent, transparent, transparent)`;
            navLinks.style.transition = 'color 0.3s ease';
            navLinks.style.color = `hsl(white/ ${cursorPosition.x}*${.1}})`;

        } if (cursorPosition.y > navLinks.offsetHeight) {
            navLinks.style.background = `none`;
        }
    }, [cursorPosition]);

    return (
        <nav className="nav">


            <svg xmlns='http://www.w3.org/2000/svg' className="navLogo" width='256' height='256' viewBox='0 0 256 256'>
                <defs>
                    <style>{`
        .stroke {
            stroke: #708090;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
    `}</style>
                </defs>

                <circle cx='128' cy='128' r='112' class='stroke' stroke-width='12' />

                <g transform='rotate(-8 128 128)'>
                    <path d='M88 70 L88 186' class='stroke' stroke-width='18' />

                    <path d='M88 70
             A58 58 0 0 1 150 128
             A58 58 0 0 1 88 186'
                        class='stroke' stroke-width='18' />

                    <path d='M152 92
             A40 40 0 0 0 104 126
             A22 22 0 0 0 150 128'
                        class='stroke' stroke-width='18' />

                    <path d='M150 128
             A58 58 0 0 1 88 186'
                        class='stroke' stroke-width='18' />
                </g>
            </svg>


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