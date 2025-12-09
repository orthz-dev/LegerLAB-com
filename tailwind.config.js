/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-fresh': '#BCDEC8',  /* Verde/Azzurro */
                'brand-soft': '#FEEBEA',   /* Rosa */
                'brand-text': '#3C514C',   /* Verde Scuro Testo */
                'brand-strong': '#200A19', /* Viola Scuro/Nero Titoli */
            },
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
            },
            maxWidth: {
                'container': '1200px',
            },
            spacing: {
                'block': '4rem',
            }
        },
    },
    plugins: [],
}
