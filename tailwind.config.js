/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000B58",
        secondary: "#003161",
        accent: "#006A67",
        highlight: "#FFF4B7",
        // Tambahkan warna tambahan atau sesuaikan nama sesuai kebutuhan
      },
      fontFamily: {
        motterdam: ["Motterdam", "sans-serif"], // 'custom' adalah nama font untuk digunakan di Tailwind
        naturebeauty: ["NatureBeauty", "sans-serif"], // 'custom' adalah nama font untuk digunakan di Tailwind
        poppins: ["Poppins", "sans-serif"], // 'custom' adalah nama font untuk digunakan di Tailwind
      },
    },
  },
  plugins: [],
};
