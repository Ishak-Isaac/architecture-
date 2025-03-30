/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode : "selector" ,
  content: ["./website/*.html"],
  theme: {
    screens:{
      "sm": "200px",
      "md" : "580px",
      "lg" : "970px",
      },
    extend: {
transitionProperty:{
 "spacing": "padding, margin",
     "bg-color": "background-color",
     "text-color": "color",
     "top" : "top",
     "bottom" : "bottom",
     "right" : "right",
     "left" : "left" ,
},
height:{
      "300p": "300px",
     "350p" : "300px",
   "400p" : "400px",
    "450p" : "450px",
      }, 
width:{
    "22%" : "22%",
    "30%" : "30%",
    "50%" : "50%",
    "70%" : "70%",
   },
letterSpacing: {
 "normal" : "0.1em",
   "wide" : "0.3em",
   "widest" : "0.5em",
},
  
  fontFamily: {
 "chalkboard" : "Chalkboard, Chalkboard-SE, Chalkduster",
   "brushScript": " Brush Script MT ",
   "bangla "  :  "Bangla MN, Bangla Sangam MN ",
    "canela"  :  " Canela, Canela Text, Canela Deck ",
    "diwan"   :  " Diwan Kufi, Diwan Thuluth ",
    "PT": " PT Mono, PT Sans, PT Sans Caption, PT Sans Narrow, PT Serif, PT Sefit Caption ",
    "SenmolyCaligan" : 'Senmoly Caligan',
},

},
  },
  plugins: [],
}

