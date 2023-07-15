function Section() {
    return (
        <section>
            <p>2023</p>
            <div className="line" />
            <div className="flex-row info">
                <h1>
                    Dobry biznes <br />
                    jest wart <br />
                    dobrej strony.
                </h1>

                <div className="flex-row buttons">
                    <p>Portfolio</p>
                    <button className="arrow-btn">
                        <img
                            src="./src/assets/right-arrow-white.svg"
                            alt="arrow-btn"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Section;
