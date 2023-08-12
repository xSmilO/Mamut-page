import { JSX, useEffect, useRef } from "react";

type ScrollAnimatorParams = {
    children: JSX.Element;
    threshold: number;
};

function ScrollAnimator({ children, threshold }: ScrollAnimatorParams) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // window.addEventListener("scroll", (e) => {
        //     const child = containerRef.current
        //         ?.firstElementChild as HTMLElement;
        //     const topOffset = child.getBoundingClientRect().top;
        //     const height = child.getBoundingClientRect().height;
        //     const progress = -topOffset / height;

        //     // console.log(topOffset, progress);
        //     console.log(vector.y * progress);

        //     if (topOffset - offset < 0) {
        //         child.style.transform = `translate(${
        //             vector.x - vector.x * progress
        //         }px, ${vector.y - vector.y * progress}px) rotate(-16deg)`;
        //     } else {
        //         child.style.transform = `translateX(${vector.x}px, ${vector.y}) rotate(-16deg)`;
        //     }
        // });

        const child = containerRef.current?.firstElementChild as HTMLElement;
        containerRef.current?.firstElementChild as HTMLElement;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        child.classList.add("show");
                        observer.unobserve(child);
                    }
                });
            },
            { threshold: threshold ? threshold : 0.0 }
        );

        observer.observe(child);
    });

    return <div ref={containerRef}>{children}</div>;
}

export default ScrollAnimator;
