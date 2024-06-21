const plugin = require('tailwindcss-textshadow')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        flicker: {
          "0%": {
            opacity: "0.27861",
          },
          "5%": {
            opacity: "0.34769",
          },
          "10%": {
            opacity: "0.23604",
          },
          "15%": {
            opacity: "0.90626",
          },
          "20%": {
            opacity: "0.18128",
          },
          "25%": {
            opacity: "0.83891",
          },
          "30%": {
            opacity: "0.65583",
          },
          "35%": {
            opacity: "0.67807",
          },
          "40%": {
            opacity: "0.26559",
          },
          "45%": {
            opacity: "0.84693",
          },
          "50%": {
            opacity: "0.96019",
          },
          "55%": {
            opacity: "0.08594",
          },
          "60%": {
            opacity: "0.20313",
          },
          "65%": {
            opacity: "0.71988",
          },
          "70%": {
            opacity: "0.53455",
          },
          "75%": {
            opacity: "0.37288",
          },
          "80%": {
            opacity: "0.71428",
          },
          "85%": {
            opacity: "0.70419",
          },
          "90%": {
            opacity: "0.7003",
          },
          "95%": {
            opacity: "0.36108",
          },
          "100%": {
            opacity: "0.24387",
          },
        },
        crt: {
          "0%": {
            textShadow: "0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "5%": {
            textShadow: "2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "10%": {
            textShadow: "0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "15%": {
            textShadow: "0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "20%": {
            textShadow: "3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "25%": {
            textShadow: "1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "30%": {
            textShadow: "0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "35%": {
            textShadow: "3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "40%": {
            textShadow: "3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "45%": {
            textShadow: "2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "50%": {
            textShadow: "0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "55%": {
            textShadow: "2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "60%": {
            textShadow: "2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "65%": {
            textShadow: "2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "70%": {
            textShadow: "0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "75%": {
            textShadow: "1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "80%": {
            textShadow: "0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "85%": {
            textShadow: "0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "90%": {
            textShadow: "3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "95%": {
            textShadow: "2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "100%": {
            textShadow: "2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        flicker: "flicker 1.5s infinite",
        crt: "crt 3s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backdropBlur: {
        xs: '.5px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwindcss-textshadow')
  ],
}