import styles from "../styles/main_page.module.scss";

function Navigation() {
    return (
        <div className={styles["bg-hero"]}>
            <nav className={styles.nav}>
                <ul>
                    <ul className={styles.navigation}>
                        <li>Portfolio</li>
                        <li>Oferta</li>
                        <li>O nas</li>
                    </ul>
                    <li className={styles["contact-button"]}>Kontakt</li>
                </ul>
            </nav>

            <div className={styles["hero-text"]}>
                <h2>
                    Projektujemy <br />
                    Programujemy <br />
                    Tworzymy zdjęcia i treści.
                </h2>
            </div>
        </div>
    );
}

export default Navigation;
