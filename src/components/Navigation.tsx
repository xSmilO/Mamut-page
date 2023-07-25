import { useState } from "react";

function Navigation() {
    const [openNav, setopenNav] = useState(false);

    const changeNav = () => {
        setopenNav((state) => (state = !state));
    };

    return (
        <nav className="navigation">
            <ul>
                <ul className="navigation-items">
                    <li>Portfolio</li>
                    <li>Oferta</li>
                    <li>O nas</li>
                </ul>
                <li className="contact-button">Kontakt</li>
            </ul>

            <ul className={`mobile ${openNav ? "show" : ""}`}>
                <ul className="navigation-items">
                    <li>Portfolio</li>
                    <li>Oferta</li>
                    <li>O nas</li>
                    <li>Kontakt</li>
                </ul>
            </ul>
            <div
                className={`nav-btn ${openNav ? "close" : "open"}`}
                onClick={() => changeNav()}
            >
                <img
                    src={`./src/assets/${
                        openNav ? "close" : "open"
                    }-menu-btn.svg`}
                    alt="menu button"
                />
            </div>
        </nav>
    );
}

export default Navigation;
