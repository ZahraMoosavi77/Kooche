/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
      }
      
    },

    screens: {
      "xs": "320px",
      // => @media (min-width: 3200px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors:{
      "white":"#FFFFFF",
      "gradient":"linear-gradient(to bottom right, red, yellow)",
      "gray-200":"#EDEDED",
      "gray-300":"#E2E3E4",
      "gray-400":"#C6C7C8",
      "gray-500":"#8C9092",
      "gray-600":"#707476",
      "gray-700":"#555859",
      "gray-800":"#3A3C3D",
      "gray-900":"#1E1F20",
      "primary":"#6D21E9",
      "primary-50":"#F0E9FD",
      "primary-100":"#E2D3FB",
      "primary-150":"#D3BCF8",
      "primary-200":"#C5A6F6",
      "primary-300":"#A77AF2",
      "primary-400":"#8A4DED",
      "primary-600":"#571ABA",
      "primary-700":"#41148C",
      "primary-800":"#2C0D5D",
      "primary-850":"#210A46",
      "primary-900":"#16072F",
      "accent-dark":"#0F152E",
      "accent-error":"#C30000",
      "accent-success":"#00BA88",
      "accent-warning":"#F4B740",
      "accent-error-text":"#FFE5E5"
    },
    fontSize: {
      "scales-6xlarge": "4rem",
      "scales-5xlarge": "3.5rem",
      "scales-4xlarge": "2.75rem",
      "scales-3xlarge": "2.5rem",
      "scales-2xlarge": "2rem",
      "scales-xlarge": "1.5rem",
      "scales-body": "1.25rem",
      "scales-large": "1.125rem",
      "scales-default": "1rem",
      "scales-caption": "0.75rem",
      "scales-small": "0.875rem",
      "scales-tiny": "0.625rem",
    },

    lineHeight:{
      "leading-1":"1.35rem",
      "leading-2":"1.75rem",
      "leading-3":"1.8rem",
      "leading-4":"2.025rem",
      "leading-5":"2.1rem"
    
    },

    fontFamily:{
      "peyda-regular":"PeydaRegular",
      "peyda-medium":"PeydaMedium",
      "peyda-semibold":"PeydaSemiBold",
      "peyda-bold":"PeydaBold",
    },
   

  },
  plugins: [],
}
