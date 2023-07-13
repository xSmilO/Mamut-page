import Navigation from "./Navigation";
import styles from "./main_page.module.scss";
import Section from "./Section";

function MainPage() {
    return (
        <div className={`${styles["main-page"]}`}>
            <Navigation />

            <Section />
        </div>
    );
}
export default MainPage;
