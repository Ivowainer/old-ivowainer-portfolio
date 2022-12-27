const round = (num) =>
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, "$1")
        .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        /* code: {
                            fontSize: em(12, 14),
                            lineHeight: round(20 / 12),
                            borderRadius: rem(4),
                            padding: "7px 5px",
                            backgroundColor: "#dfe2e6",
                        }, */
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                        h2: {
                            textDecorationLine: "underline",
                            textDecorationColor: "#dfe2e6",
                            textUnderlineOffset: "14px",
                        },
                    },
                },
                invert: {
                    css: {
                        a: {
                            color: "#1DB981",
                            "&:hover": {
                                color: "#005c3b",
                                backgroundColor: "#1DB981",
                            },
                        },
                        h2: {
                            textDecorationLine: "underline",
                            textDecorationColor: "#444f60",
                            textUnderlineOffset: "14px",
                        },
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                        /* code: {
                            fontSize: em(12, 14),
                            lineHeight: round(20 / 12),
                            borderRadius: rem(4),
                            padding: "7px 5px",
                            backgroundColor: "#33373a",
                        }, */
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
