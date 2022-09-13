import React from "react";
import CheckCircle from "../../Assets/Svg/CheckCircle";
import CloudUpload from "../../Assets/Svg/CloudUpload";
import UserIcon from "../../Assets/Svg/User";
import SearchIcon from "../../Components/Search";

const steps = [
    {
        icon: <UserIcon className="h-6 w-6 text-green-500" />,
        heading: "create account",
        description: "First you have to create an account",
    },
    {
        icon: <CloudUpload className="h-6 w-6 text-yellow-500" />,
        heading: "upload cv/resume",
        description: "For a job you have to upload your best cv  or resume",
    },
    {
        icon: <SearchIcon className="h-6 w-6" />,
        heading: "Search job",
        description: "Find your next big job using search",
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
        heading: "Apply",
        description: "Finally you apply for your dream job",
    },
];

const HowItWorks = () => {
    return (
        <section className="grid md:grid-cols-2 items-center px-4 md:px-32 my-8 md:my-32">
            <div className="text-center md:text-left mb-5">
                <h1 className="font-black text-4xl sm:text-3xl md:text-7xl mb-4 md:mb-10">
                    How it works?
                </h1>
                <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl mb-2 md:mb-10">
                    Follow <br className="hidden md:block" /> 4 easy steps{" "}
                </h2>
                <p className="md:text-lg text-gray-500">
                    Follow this few steps to get started and get your dream job
                </p>
            </div>
            <div className="hidden grid-cols-2 gap-4 lg:gap-8 md:px-4 lg:px-8 md:grid">
                <div className="md:space-y-6 lg:space-y-8 contents md:block">
                    {[...steps]
                        .filter((_, index) => index % 2 === 0)
                        .map((step, index) => (
                            <InfoCard key={index} step={step} />
                        ))}
                </div>
                <div className="md:mt-8 md:space-y-6 lg:space-y-8 contents md:block">
                    {[...steps]
                        .filter((_, index) => index % 2 !== 0)
                        .map((step, index) => (
                            <InfoCard key={index} step={step} />
                        ))}
                </div>
            </div>
            <div className="flex flex-col space-y-4 md:hidden px-5">
                {[...steps].map((step, index) => (
                    <InfoCard key={index} step={step} />
                ))}
            </div>
        </section>
    );
};

const InfoCard = ({ step }) => (
    <div className="flex flex-col items-center px-4 py-4 md:py-8 lg:py-10 bg-white space-y-3 border-[1px] shadow-sm rounded-md">
        {step.icon}
        <h2 className="font-bold text-center">{step.heading}</h2>
        <p className="text-center">{step.description}</p>
    </div>
);

export default HowItWorks;
