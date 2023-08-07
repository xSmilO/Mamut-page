import { useEffect } from "react";

interface SliderProps {
    gap: number;
    speed: number;
}

function Slider({ gap, speed }: SliderProps) {
    let animationRequest: number;
    let isResized = false;

    const sleep = async (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const calcOffset = (bounds: DOMRect[], idx: number): number => {
        let offset = 0;

        for (let i = 0; i < idx; i++) {
            offset += bounds[i].width + gap;
        }

        return offset;
    };

    const appendToEnd = (slide: HTMLElement) => {
        const sliderGroups = document.querySelectorAll<HTMLElement>(
            ".slider-container .slider"
        );

        let offset = 0;

        for (let i = 0; i < sliderGroups.length - 1; i++) {
            const bounds = sliderGroups[i].getBoundingClientRect();
            offset += bounds.width + gap;
        }
        slide.style.left = `${offset + gap}px`;
    };

    const setupSlides = () => {
        const sliderGroups = document.querySelectorAll<HTMLElement>(
            ".slider-container .slider"
        );

        const elementsBounds: DOMRect[] = [];

        sliderGroups.forEach((elem) => {
            elementsBounds.push(elem.getBoundingClientRect());
        });

        sliderGroups.forEach((elem, idx) => {
            elem.style.left = `${calcOffset(elementsBounds, idx)}px`;
            elem.style.opacity = "1";
        });
    };

    const hideAllSlides = () => {
        const sliderGroups = document.querySelectorAll<HTMLElement>(
            ".slider-container .slider"
        );

        sliderGroups.forEach((elem) => (elem.style.opacity = "0"));
    };

    const removeClones = () => {
        const cloneElements = document.querySelectorAll<HTMLElement>(
            ".slider-container .clone"
        );

        cloneElements.forEach((clone) => clone.remove());
    };

    const restart = async () => {
        cancelAnimationFrame(animationRequest);
        if (isResized == true) return;

        isResized = true;
        hideAllSlides();
        await sleep(1000);
        isResized = false;
        sliderStart().catch((e) => console.error(e));
    };

    const moveElements = (
        sliderGroups: NodeListOf<HTMLElement>,
        speed: number,
        deltaTime: number
    ) => {
        sliderGroups.forEach((elem) => {
            const bounds = elem.getBoundingClientRect();
            elem.style.left = `${bounds.left - speed * deltaTime}px`;
        });
    };

    const fillEmptySpace = (
        slider: HTMLElement,
        sliderGroups: NodeListOf<HTMLElement>
    ) => {
        removeClones();

        // calculate width of all elements and compare to slider
        let slidesWidth = 0;
        const sliderBounds = slider.getBoundingClientRect();
        sliderGroups.forEach((elem) => {
            const bounds = elem.getBoundingClientRect();

            slidesWidth += bounds.width + gap;
        });

        for (let i = 0; i < Math.ceil(sliderBounds.width / slidesWidth); i++) {
            const newSlide = sliderGroups[0].cloneNode(true) as HTMLElement;
            newSlide.classList.add("clone");
            slider.appendChild(newSlide);
            slider.appendChild(newSlide);
        }

        setupSlides();
    };

    const checkIfIsOut = (
        slider: HTMLElement,
        sliderGroups: NodeListOf<HTMLElement>
    ) => {
        sliderGroups = document.querySelectorAll<HTMLElement>(
            ".slider-container .slider"
        );

        sliderGroups.forEach((elem) => {
            const bounds = elem.getBoundingClientRect();

            if (bounds.left * -1 >= bounds.width) {
                const newSlide = elem.cloneNode(true) as HTMLElement;
                slider.appendChild(newSlide);
                elem.remove();

                appendToEnd(newSlide);
            }
        });
    };

    const sliderStart = async () => {
        console.log("called");
        if (isResized) return;

        let last = 0;
        const slider = document.querySelector<HTMLElement>(".slider-container");

        let sliderGroups = document.querySelectorAll<HTMLElement>(
            ".slider-container .slider"
        );

        if (!sliderGroups || !slider) return;

        const sliderBounds = slider.getBoundingClientRect();

        const slideSpeed = speed * (sliderBounds.width / 1000);

        // let elementsBounds: DOMRect[] = [];
        await sleep(1000);

        fillEmptySpace(slider, sliderGroups);
        sliderGroups = document.querySelectorAll<HTMLElement>(
            ".slider-container .slider"
        );

        animationRequest = requestAnimationFrame(function animate(now) {
            // elementsBounds = [];
            // sliderGroups.forEach((elem) => {
            //     elementsBounds.push(elem.getBoundingClientRect());
            // });
            sliderGroups = document.querySelectorAll<HTMLElement>(
                ".slider-container .slider"
            );

            const deltaTime = Math.min(1, (now - last) / 1000);
            last = now;

            checkIfIsOut(slider, sliderGroups);
            // move slides
            moveElements(sliderGroups, slideSpeed, deltaTime);
            animationRequest = requestAnimationFrame(animate);
        });
    };

    useEffect(() => {
        sliderStart().catch((e) => console.error(e));

        window.onresize = () => {
            restart().catch((e) => console.error(e));
        };
    });

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slider-item">
                    <div className="slider-text">
                        Wszystko w jednej cenie i tylko w 2 tygodnie
                    </div>
                    <div className="dot" />
                </div>

                <div className="slider-item">
                    <div className="slider-text">
                        3000zł brutto
                        {/* <img
                            src="./src/assets/ellipse.svg"
                            className="ellipse"
                            alt=""
                        /> */}
                    </div>
                    <div className="dot" />
                </div>

                <div className="slider-item">
                    <div className="slider-text">
                        strona one-page lub strona wizytówka
                    </div>
                    <div className="dot" />
                </div>
            </div>
        </div>
    );
}

export default Slider;
