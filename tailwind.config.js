/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
width :{
card : '400px'
},
height :{
  card : '500px'
  },
colors:{
  theme1: `#007E85`

},
fontFamily :{
latoN : ['LatoN'],
latoB : ['LatoB'],

}
    },
  },
  plugins: [],
}
