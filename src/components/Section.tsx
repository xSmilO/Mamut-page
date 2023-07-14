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
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="88"
                            height="60"
                            viewBox="0 0 88 60"
                            fill="none"
                        >
                            <rect
                                x="0.5"
                                y="0.5"
                                width="87"
                                height="59"
                                rx="29.5"
                                fill="#F8F9FE"
                            />
                            <path
                                d="M56.3536 31.3536C56.5488 31.1583 56.5488 30.8417 56.3536 30.6464L53.1716 27.4645C52.9763 27.2692 52.6597 27.2692 52.4645 27.4645C52.2692 27.6597 52.2692 27.9763 52.4645 28.1716L55.2929 31L52.4645 33.8284C52.2692 34.0237 52.2692 34.3403 52.4645 34.5355C52.6597 34.7308 52.9763 34.7308 53.1716 34.5355L56.3536 31.3536ZM32 31.5L56 31.5V30.5L32 30.5V31.5Z"
                                fill="black"
                            />
                            <rect
                                x="0.5"
                                y="0.5"
                                width="87"
                                height="59"
                                rx="29.5"
                                stroke="#F8F9FE"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Section;