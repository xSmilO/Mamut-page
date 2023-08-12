function AboutSection() {
    return (
        <section className="about-section" id="about">
            <h1 className="mobile">O NAS</h1>

            <div className="about-text">
                <h3 className="mobile">
                    Poszukujesz rzetelnej firmy z doświadczeniem, która zbuduje
                    i wypromuje Twoją stronę internetową od podstaw?
                </h3>

                <h3 className="mobile smaller">
                    Poszukujesz rza zbuduje i sdfsdfsdfsdfsdf wysdfsdfspromuje
                    Twposzybuje na samą górę każ dej wyszukiwarki! Nasz zespół
                    na pi erwszym miejscu stawia satysfakcję klien ta, a do
                    każdego zlecenia podchodzimy indywidualnie i z dbałością o
                    szczegóły. Zapewnimy dla Twojej firmy tanią i profesjonalną
                    stroną internetową, dodatkowych ukrytych kosztów!
                </h3>

                <h3>
                    Poszukujesz rza zbuduje i wypromuje Twposzybuje na samą górę
                    każdej wyszukiwarki!
                </h3>
                <h3>
                    Nasz zespół na pierwszym miejscu stawia satysfakcję klienta,
                    a do każdego zlecenia podchodzimy indywidualnie i z
                    dbałością o szczegóły. Zapewnimy dla Twojej firmy tanią i
                    profesjonalną stroną internetową, bez dodatkowych ukrytych
                    kosztów!
                </h3>
            </div>

            <button className="btn">
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

            <img src="./src/assets/main-bg.jpg" alt="" className="mobile" />

            <div className="flex-column">
                <div className="info">
                    <h1>O NAS</h1>
                    <p>
                        Poszukujesz rzetelnej firmy z doświadczeniem, która
                        zbuduje i wypromuje Twoją stronę internetową od podstaw?
                        Jeśli tak, dobrze trafiłeś!
                    </p>
                </div>
                <div className="img" />
            </div>
        </section>
    );
}

export default AboutSection;
