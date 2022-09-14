import React from "react";

const Footer = () => {
    return (
        <footer class="px-4 md:px-16 lg:px-32 py-10 md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
            <span class="text-sm  sm:text-center text-gray-400">
                © 2022{" "}
                <a href="https://flowbite.com/" class="hover:underline">
                    Jobify™
                </a>
                . All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm  text-gray-400 sm:mt-0">
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6 ">
                        About
                    </a>
                </li>
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6">
                        Find Jobs
                    </a>
                </li>
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6">
                        Career Advice
                    </a>
                </li>
                <li>
                    <a href="/" class="hover:underline">
                        Contact
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;