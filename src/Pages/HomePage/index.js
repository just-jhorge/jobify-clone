import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import LogoSection from "./LogoSection";
import WhyTrusted from "./WhyTrusted";

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <Hero />
                <LogoSection />
                <HowItWorks />
                <WhyTrusted />
            </main>
            <Footer />
        </>
    );
};

export default Home;
