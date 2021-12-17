function transform(id) {

  // console.log(id);
   
   for (let i = 1; i<=4 ; i++) {
     if(i==id) {
      let div = document.getElementById(`subscription${id}`);

      div.style.background= "#90221E";
      div.style.transform= "scale(1,1.05)";
      div.style.borderTop = "7px solid #C02D28"
  
      let icon = document.getElementById(`icon${id}`);
      icon.style.opacity = "1";
      
     }else {

      let div = document.getElementById(`subscription${i}`);

      div.style.background= "black";
      div.style.transform= "scale(1,1)";
      div.style.borderTop = "7px solid #3e3e3e"
  
      let icon = document.getElementById(`icon${i}`);
      icon.style.opacity = "0.4";
     }   

   }

 
}

function Signup(e) {
  e.preventDefault(e);

  let form = document.getElementById("signup-form");
  
    
  let user_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("card").value,
    description: document.getElementById("description").value,
  };

  user_data = JSON.stringify(user_data);

  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: user_data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res:", res);
      alert(res.message);
      user_data.name.value = ""; 
      user_data.email.value = "";
      user_data.password.value ="";       
    })
    .catch((err) => {
      console.log("err:", err);
    });
}

