/*
Este arquivo chamado "gatsby-browser.js" serve para quando precisamos importar bibliotecas ou fazer coisas com
javascript por fora do reactjs como por exemplo uma "trigger".

 Implement Gatsby's Browser APIs in this file.

 See: https://www.gatsbyjs.org/docs/browser-apis/
*/
import "lazysizes"
require("prismjs/themes/prism-tomorrow.css")

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
    offset: 66 // size of the header (sidebar) when mobile
  })
}
