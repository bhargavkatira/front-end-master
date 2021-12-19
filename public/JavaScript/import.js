import  {navbar}  from "../Components/navbar.js";

import {footer}  from "../Components/footer.js";

let navbar_div = document.getElementById("navbar");

let footer_div = document.getElementById("foot");

footer_div.innerHTML = footer();
  
navbar_div.innerHTML = navbar();

