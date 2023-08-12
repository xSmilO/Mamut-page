import { useState } from "react";
import { scrollTo } from "../utils";

function Navigation() {
    const [openNav, setopenNav] = useState(false);

    const changeNav = () => {
        setopenNav((state) => (state = !state));
    };

    return (
        <nav className="navigation">
            <ul>
                <ul className="navigation-items">
                    <li
                        onClick={() => {
                            scrollTo("portfolio");
                        }}
                    >
                        Portfolio
                    </li>
                    <li
                        onClick={() => {
                            scrollTo("offer");
                        }}
                    >
                        Oferta
                    </li>
                    <li
                        onClick={() => {
                            scrollTo("about");
                        }}
                    >
                        O nas
                    </li>
                </ul>
                <li
                    className="contact-button"
                    onClick={() => {
                        scrollTo("contact");
                    }}
                >
                    Kontakt
                </li>
            </ul>

            <ul className={`mobile ${openNav ? "show" : ""}`}>
                <ul className="navigation-items">
                    <li
                        onClick={() => {
                            changeNav();
                            scrollTo("portfolio");
                        }}
                    >
                        Portfolio
                    </li>
                    <li
                        onClick={() => {
                            changeNav();
                            scrollTo("offer");
                        }}
                    >
                        Oferta
                    </li>
                    <li
                        onClick={() => {
                            changeNav();
                            scrollTo("about");
                        }}
                    >
                        O nas
                    </li>
                    <li
                        onClick={() => {
                            changeNav();
                            scrollTo("contact");
                        }}
                    >
                        Kontakt
                    </li>
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
