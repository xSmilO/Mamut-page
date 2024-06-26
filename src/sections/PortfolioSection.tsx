import ScrollAnimator from "../components/ScrollAnimator";

function PortfolioSection() {
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="placeholder">
                <h2>Tworzymy strony www, które</h2>
                <h2>przyciągają uwagę i angażują użytkowników.</h2>
            </div>
            <div className="description">
                <p>
                    Zobacz nasze <br /> ostatnie <br />
                    realizacje
                </p>
            </div>

            <ScrollAnimator threshold={0.4}>
                <div className="container">
                    <div className="image">
                        <img
                            src="./src/assets/mrowka-img-small.png"
                            alt="product image"
                        />
                        {/* <img src="./src/assets/asset_1.svg" alt="product image" />
                         */}
                        {/* <image src="./src/assets/asset_2.pdf" type="" /> */}
                    </div>

                    <div className="product-info">
                        <div className="product-container">
                            <p>one-pager</p>
                            <h3>Mrówka Iłża</h3>
                            <a href="https://mrowka-ilza.pl/">
                                <button>
                                    zobacz stronę&nbsp;
                                    <img
                                        src="./src/assets/right-arrow.svg"
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollAnimator>
        </section>
    );
}

export default PortfolioSection;
