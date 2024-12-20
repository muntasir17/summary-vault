/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./login.html','./book.html','./pageone.html','./pagetwo.html','./review.html','./about.html'],
  theme: {
    extend: {
      animation:{
        spinSlow : 'spin 0.6s infinite linear',
        spinfast : 'spin 0.4s infinite linear',
      }
      
      
    },
  },
  plugins: [],
}

