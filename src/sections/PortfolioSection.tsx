function PortfolioSection() {
    return (
        <section className="portfolio-section">
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

            <div className="container">
                <div className="image">
                    <img
                        src="./src/assets/mrowka-img-small.png"
                        alt="product image"
                    />
                </div>

                <div className="product-info">
                    <div className="product-container">
                        <p>one-pager</p>
                        <h3>Mrówka Iłża</h3>
                        <button>
                            zobacz stronę&nbsp;
                            <img src="./src/assets/right-arrow.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;
