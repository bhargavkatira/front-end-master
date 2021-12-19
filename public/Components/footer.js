function footer() {
    return `
    <div class="footer" >
    <div class="lst" > 
    <img class="logo2" src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg" alt="">    
    <ul>
       <a href="http://localhost:3000/course"><li>Courses</li></a>
       <a href="http://localhost:3000/learn"><li>Learn</li></a>
       <a href="http://localhost:3000/teachers"><li>Teachers</li></a>
       <a href=""><li>Guides</li></a>
       <a href="http://localhost:3000/pricing"><li>Pricing</li></a>
       <a href="http://localhost:3000/login"><li>Login</li></a>
       <a href="http://localhost:3000/pricing"><li>Join Now</li></a>
       <a href="http://localhost:3000"><li>FAQ</li></a>
    
    </ul>
    
    </div>
    
    <div id="appDiv">
    <img id="apple" src="../Images/download-on-the-app-store.png" alt="">    
    <img id="google" src="../Images/en_badge_web_generic.png" alt="">
    </div>
    
    <div class="lstlogo" >
        <img class="lg" src="../Images/tweet.png" alt="">
        <img class="lg" src="../Images/linkedin.png" alt="">
        <img class="lg" src="../Images/fb.png" alt="">
        <img class="lg" src="../Images/instagram.png" alt="">
        <p style="color: rgb(143, 134, 134);font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;padding-left: 59%;margin-top: 10px; " >Email : <a style="color: orangered;" href="mailto:support@frontendmasters.com">support@frontendmasters.com</a></p>
    
    
    </div>
    
    <div id="bottomDiv"> <p>Frontend Masters is proudly made in Minneapolis, MN</p> <p>© 2021 Frontend Masters · <a href="https://static.frontendmasters.com/assets/legal/MasterServicesAgreement.pdf">Terms of Service</a> · <a href="https://static.frontendmasters.com/assets/legal/PrivacyPolicy.pdf">Privacy Policy</a> </p></div>
    
    
    </div>
    `
    }

export {footer} ;