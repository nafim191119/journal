import Hero from "../../subPages/Hero/Hero";
import MarketData from "../../subPages/MarketData/MarketData";
import Slider from "../../subPages/Slider/Slider";
import Sponsor from "../../subPages/Sponsore/Sponsor";
import Stats from "../../subPages/Stats/Stats";

const Home = () => {
    return (
        <div className="bg-gray-100">
            <MarketData></MarketData>
            <Hero></Hero>
            <Slider></Slider>
            <Stats></Stats>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;