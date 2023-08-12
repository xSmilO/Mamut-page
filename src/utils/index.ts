const scrollTo = (id: string, offset = 0) => {
    const element = document.getElementById(id);

    if (offset == 0) {
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }

        return;
    }

    if (!element) return;
    const elemOffset = element.getBoundingClientRect().top - offset;

    window.scrollTo({ top: elemOffset + window.scrollY, behavior: "smooth" });
};

export { scrollTo };
