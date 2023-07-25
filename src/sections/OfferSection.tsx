function OfferSection() {
    return (
        <section className="offer-section">
            <div className="header">
                <h2>Oferta</h2>
                <div className="contact">
                    <p>kontakt</p>
                    <button className="arrow-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 38 8"
                            fill="none"
                        >
                            <path
                                d="M37.3536 4.35356C37.5488 4.15829 37.5488 3.84171 37.3536 3.64645L34.1716 0.464469C33.9763 0.269207 33.6597 0.269207 33.4645 0.464469C33.2692 0.659731 33.2692 0.976314 33.4645 1.17158L36.2929 4L33.4645 6.82843C33.2692 7.02369 33.2692 7.34027 33.4645 7.53554C33.6597 7.7308 33.9763 7.7308 34.1716 7.53554L37.3536 4.35356ZM-4.37114e-08 4.5L37 4.5L37 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="offers">
                <div className="offer">
                    <h3>Projektujemy</h3>
                    <div className="offer-info">
                        <p>Intuicyjna nawigacja i estetyczny układ stron.</p>
                        <p>
                            Kreatywne i responsywne projekty stron
                            internetowych.
                        </p>
                        <p>
                            Dopasowywanie do unikalnych potrzeb klientów i ich
                            wizji.
                        </p>
                    </div>
                </div>

                <div className="offer">
                    <h3>Programujemy</h3>
                    <div className="offer-info">
                        <p>
                            Efektywny kod i funkcjonalność (HTML, CSS,
                            JavaScript oraz React).
                        </p>
                        <p>
                            Personalizacja i dostosowanie do indywidualnych
                            potrzeb.
                        </p>
                        <p>Innowacyjne rozwiązania i nowoczesne technologie.</p>
                    </div>
                </div>
                <div className="offer">
                    <h3>Tworzymy zdjęcia i treści</h3>
                    <div className="offer-info">
                        <p>stro enim ad minim veniam, quis</p>
                        <p>ipiscing elit, sed do eiusmod tempor</p>
                        <p>laboris nisi ut aliquip</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OfferSection;
