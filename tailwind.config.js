/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mainfont:[
          '"Nunito Sans", Arial, sans-serif'
        ]
      },
      boxShadow: {
        headerShadow: "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        searchShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
        cardShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
      },
      backgroundImage: {
        "lightpath":'url("../images/Path.svg")',
        "darktpath":'url("../images/Path-light.svg")',
        "light-search-icon":'url("../images/icon-search-black.svg")',
        "dark-search-icon":'url("../images/icon-search-white.svg")',
        "light-shape":'url("../images/Shape.svg")',
        "dark-shape":'url("../images/Shape-white.svg")',
      },
      backgroundPosition:{
        searchiconPosition: "32px center", 
        selecticonPosition: "right 20px center", 
      }
    },
  },
  plugins: [],
}
