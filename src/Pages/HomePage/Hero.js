import React from "react";
import { motion } from "framer-motion";
import Button from "../../Components/Button/Button";
import SearchIcon from "../../Components/Search";
import Input from "../../Components/Input/Input";
import Briefcase from "../../Assets/Svg/Briefcase";
import LocationPin from "../../Assets/Svg/LocationPin";
import Microsoft from "../../Assets/Img/microsoft.svg";
import Envelope from "../../Assets/Svg/Envelope";
import BadgeCheck from "../../Assets/Svg/BadgeCheck";
import Woman from "../../Assets/Img/woman.png";

const Hero = () => {
    return (
        <section className="h-[85vh] px-4 md:px-16 lg:px-32 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-secondary">
            <HeroLeft />
            <HeroRight />
        </section>
    );
};

const HeroLeft = () => (
    <div className="relative flex flex-col md:items-start items-center justify-end lg:justify-center text-center lg:text-left">
        <h1 className="capitalize text-4xl md:text-5xl lg:text-7xl font-black font-primary md:leading-tight mb-2 md:mb-10">
            Find your dream job with us
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-20 text-center md:text-left text-gray-700 max-w-xs md:max-w-lg">
            With us the job search app, you are always one click away from your
            dream job, search for new job from the comfort of your home
        </p>
        <div className="flex flex-col md:flex-row gap-x-4 w-full justify-center items-end lg:justify-start mx-auto">
            <div className="flex flex-col md:items-center md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3 mb-5 md:mb-0">
                <Input
                    type="text"
                    placeholder="Job Title"
                    icon={<Briefcase />}
                    className="md:w-20"
                />
                <Input
                    type="text"
                    placeholder="Location"
                    icon={<LocationPin />}
                    className="w-20"
                />
            </div>
            <div className="flex justify-start">
                <Button
                    text="Search"
                    color="primary"
                    icon={<SearchIcon />}
                    isformbutton={true}
                />
            </div>
        </div>
    </div>
);

const HeroRight = () => (
    <div className="relative w-full overflow-hidden">
        <div>
            <div className="place-center center-object circular-path w-[300px] h-[300px] md:w-[450px] md:h-[450px]" />
            <motion.div className="circular-motion1 center-object border-[1px] border-gray-400 bg-background p-1 md:p-2 flex items-center gap-2 md:gap-4 z-30 rounded-md">
                <img src={Microsoft} className="h-4 w-4 md:h-8 md:w-8" alt="" />
                <div className="flex flex-col gap-1 md:gap-2">
                    <div className="text-xs md:text-sm text-green-700 font-bold inline-flex items-center gap-2">
                        <span>UI/UX Designer</span>
                    </div>
                    <div className="text-xxs md:text-xs inline-flex items-center gap-2 md:gap-4">
                        <span>Microsoft</span>
                        <button className="button button-secondary py-0.5 px-1.5 text-xxs md:text-xs text-primary rounded-md !border-0">
                            Apply
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
        <div>
            <div className="place-center center-object circular-path w-[200px] h-[200px] md:w-[300px] md:h-[300px]" />
            <motion.div className="circular-motion2 center-object border-[1px] border-gray-400 bg-background p-1 md:p-2 flex items-center gap-2 md:gap-4 z-20 rounded-md">
                <Envelope className="h-4 w-4 md:h-8 md:w-8 text-orange-500" />
                <div className="flex flex-col gap-1 md:gap-2">
                    <div className="text-xs md:text-sm text-green-700 font-bold inline-flex items-center gap-2">
                        <span>Congratulations</span>
                        <BadgeCheck className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="text-xxs md:text-xs">
                        You just got the job
                    </span>
                </div>
            </motion.div>
        </div>
        <div>
            <div className="place-center center-object circular-path w-[80px] h-[80px] md:w-[160px] md:h-[160px]" />
            <motion.div className="circular-motion3 center-object border-[1px] border-gray-400 bg-background p-1 md:p-2 flex items-center gap-2 md:gap-4 z-10 rounded-md">
                <Briefcase className="h-8 w-8 md:h-10 md:w-10 mb-1 md:mb-2 bg-purple-300 text-purple-700 p-2 rounded-md" />
                <span className="text-xs md:text-sm font-bold">180k+</span>
                <span className="text-xxs md:text-xs">Job Vacancies</span>
            </motion.div>
        </div>
        <img
            src={Woman}
            className="h-[65%] opacity-80 md:h-[70%] absolute -right-[20%] bottom-0 -translate-x-1/2 z-[5]"
            alt="woman"
        />
    </div>
);

export default Hero;
