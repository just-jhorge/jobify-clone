import React from "react";
import MicrosoftLogo from "../../Assets/Img/logosection/MicrosoftLogo.svg";
import HeroLogo from "../../Assets/Img/logosection/HeroLogo.svg";
import GoogleLogo from "../../Assets/Img/logosection/GoogleLogo.svg";
import UIPathLogo from "../../Assets/Img/logosection/UIPathLogo.svg";

const LogoSection = () => {
    return (
        <section className="px-16 lg:px-32 py-16">
            <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-12">
                {[HeroLogo, MicrosoftLogo, UIPathLogo, GoogleLogo].map(
                    (img, index) => (
                        <img
                            src={img}
                            key={index}
                            className="h-8 md:h-12"
                            alt={`img ${index}`}
                        />
                    )
                )}
            </div>
        </section>
    );
};

export default LogoSection;
