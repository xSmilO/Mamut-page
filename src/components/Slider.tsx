function Slider() {
    const test = () => {
        console.log("test");
    };

    return (
        <div className="slider-container" onLoad={test}>
            <div className="slider">
                <div className="slider-item">
                    <div className="slider-text">
                        Wszystko w jednej cenie i tylko w 2 tygodnie
                    </div>
                    <div className="dot" />
                </div>

                <div className="slider-item">
                    <div className="slider-text">3000zł brutto</div>
                    <div className="dot" />
                </div>

                <div className="slider-item">
                    <div className="slider-text">
                        strona one-page lub strona wizytówka
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
