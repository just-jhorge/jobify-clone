/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "340px",
            sm: "425px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                primary: "#00756A",
                secondary: "#E6F1F0",
                tertiary: "#373656",
                background: "#FAFAFA",
            },
            fontFamily: {
                primary: ["poppins", "sans-serif"],
                secondary: ["Josefin Sans", "sans-serif"],
                primarySemiBold: ["poppinsSemiBold", "sans-serif"],
                primaryExtraBold: ["poppinsExtraBold", "sans-serif"],
                primaryBlack: ["poppinsBlack", "sans-serif"],
            },
            fontSize: {
                xxs: "0.5rem",
                hero: "2.75rem",
            },
            zIndex: {
                absolute: "10000",
            },
        },
    },
    plugins: [],
};
