/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/AddProduit.jsx",
    "./src/components/ListProduit.jsx",
    "./src/components/InfoProd.jsx",
    "./src/components/Menu.jsx",
    "./src/components/Recherche.jsx",
    "./src/components/Affiche.jsx",
    "./src/App.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',  
        secondary: '#2563eb', 
        background: '#111827',
        text: '#e5e7eb', 
        accent: '#3b82f6', 
        border: '#374151', 
      },
    },
  },
  plugins: [],
}