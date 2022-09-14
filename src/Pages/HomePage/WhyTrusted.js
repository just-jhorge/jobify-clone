import React from "react";
import LargeImage from "../../Assets/Img/whytrustedsection/largeimage.png";
import SmallImage4 from "../../Assets/Img/whytrustedsection/smallimage4.png";
import SmallImage5 from "../../Assets/Img/whytrustedsection/smallimage5.png";
import Button from "../../Components/Button/Button";

const WhyTrusted = () => {
    return (
        <section className="h-screen px-4 md:px-16 pt-36 md:pt-0 lg:px-32 flex flex-col md:flex-row  items-center justify-between">
            <div className="flex justify-center items-center w-1/2">
                <div className="w-fit h-fit relative">
                    <img src={LargeImage} className="relative z-20" alt="" />
                    <img
                        src={SmallImage4}
                        className="h-20 absolute -top-16 -left-20"
                        alt=""
                    />
                    <img
                        src={SmallImage5}
                        className="h-20 absolute -bottom-8 -left-20"
                        alt=""
                    />
                    <img
                        src={SmallImage5}
                        className="h-20 absolute -top-14 -right-10"
                        alt=""
                    />
                    <img
                        src={SmallImage4}
                        className="h-20 absolute -bottom-5 -right-20"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full md:w-1/2 mb-7 md:mb-0">
                <h1 className="text-3xl font-bold mb-3">Why we are trusted</h1>
                <p className="text-lg leading-8 mb-5 text-gray-500">
                    100k+ job seekers trust us for <br /> the following reasons
                </p>
                <ul className="flex flex-col gap-3 mb-7">
                    <li className="inline-flex items-center space-x-4">
                        <Tick />
                        <span>Trusted & Quality Job</span>
                    </li>
                    <li className="inline-flex items-center space-x-4">
                        <Tick />
                        <span>International Jobs</span>
                    </li>
                    <li className="inline-flex items-center space-x-4">
                        <Tick />
                        <span>Top Companies</span>
                    </li>
                    <li className="inline-flex items-center space-x-4">
                        <Tick />
                        <span>No Extra Charge</span>
                    </li>
                </ul>
                <Button
                    text="Get Started"
                    color="primary"
                    isformbutton={false}
                    size="fit"
                />
            </div>
        </section>
    );
};

const Tick = () => (
    <span className="bg-primary text-white rounded-full text-sm h-6 w-6 flex justify-center items-center">
        √
    </span>
);

export default WhyTrusted;
