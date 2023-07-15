import Slider from "./components/Slider";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import MainSection from "./sections/MainSection";
import OfferSection from "./sections/OfferSection";
import PortfolioSection from "./sections/PortfolioSection";

function App() {
    return (
        <div>
            <MainSection />
            <AboutSection />
            <Slider />
            <OfferSection />
            <PortfolioSection />
            <ContactSection />
        </div>
    );
}

export default App;

