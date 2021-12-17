function navbar() {
    return `
<div class="navbar">

  <h3><a href="http://localhost:3000"><img class="logo" src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg" alt=""></a></h3>
<div id="options">
<h3><a style="text-decoration: none;" href="http://localhost:3000/course"><p class="nvtxt">Courses</p> </a></h3>
<h3><a style="text-decoration: none;"href="http://localhost:3000/learn"><p class="nvtxt">Learn</p></a></h3>
<h3><a style="text-decoration: none;"href="http://localhost:3000/price"><p class="nvtxt">Pricing</p></a></h3>
<h3><a style="text-decoration: none;"href="http://localhost:3000/login"><p class="nvtxt">Login</p></a></h3>
<h3><a style="text-decoration: none; "href="http://localhost:3000/price"><p class="nvtxt btn1">Join Now</p></a></h3>

</div>
</div>

<svg class="diagonal" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 10" preserveaspectratio="none"><defs><linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#c02d28"></stop><stop offset="100%" stop-color="#e66225"></stop></linearGradient></defs><polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon></svg> `
}



export  {navbar} ;