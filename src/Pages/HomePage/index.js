import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import LogoSection from "./LogoSection";
import WhyTrusted from "./WhyTrusted";

const Home = () => {
    return (
        <main>
            <Header />
            <Hero />
            <LogoSection />
            <HowItWorks />
            <WhyTrusted />
        </main>
    );
};

export default Home;
