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
  console.log("hello")
    e.preventDefault(e);
  
    let form = document.getElementById("signup-form");
    
    let user_data = {
      email: document.getElementById("email").value,
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      payment_option: document.getElementById("payment_option").value,
      payment_detail: document.getElementById("payment_detail").value,
    };
  
    user_data = JSON.stringify(user_data);
  
    fetch("/users", {
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
        user_data.first_name.value = ""; 
        user_data.email.value = "";
        user_data.password.value ="";       
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }
  