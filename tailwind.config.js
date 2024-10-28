/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                main: "#3c4f4b",
                body: "#ffffff",
                second: "#f5f4ed",
            },
            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
            },
        },
        screens: {
            'mobile': '360px',
            'tablet': '520px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [],
}
