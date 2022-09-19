import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <section className="h-screen flex items-center justify-center text-center">
            <div className="">
                <h1 className="text-5xl md:text-7xl font-primaryExtraBold mb-2">
                    Error 404
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                    Please go back{" "}
                    <Link className="text-primary" to="/">
                        Home
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default NoPage;
