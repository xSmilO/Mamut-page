function Section() {
    return (
        <section>
            <p>2023</p>
            <div className="line" />
            <div className="info">
                <h1>
                    Dobry biznes <br />
                    jest wart <br />
                    dobrej strony.
                </h1>

                {/* <div className="spacer" /> */}

                <div className="buttons">
                    <p>Portfolio</p>
                    <button className="arrow-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="8"
                            viewBox="0 0 38 8"
                            fill="currentColor"
                        >
                            <path
                                d="M37.3536 4.35356C37.5488 4.15829 37.5488 3.84171 37.3536 3.64645L34.1716 0.464469C33.9763 0.269207 33.6597 0.269207 33.4645 0.464469C33.2692 0.659731 33.2692 0.976314 33.4645 1.17158L36.2929 4L33.4645 6.82843C33.2692 7.02369 33.2692 7.34027 33.4645 7.53554C33.6597 7.7308 33.9763 7.7308 34.1716 7.53554L37.3536 4.35356ZM-4.37114e-08 4.5L37 4.5L37 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Section;
