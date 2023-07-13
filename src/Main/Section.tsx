import styles from "./main_page.module.scss";

function Section() {
    return (
        <section>
            <h1>
                Dobry biznes <br />
                jest wart <br />
                dobrej strony.
            </h1>

            <div className={styles["buttons"]}></div>
        </section>
    );
}

export default Section;
