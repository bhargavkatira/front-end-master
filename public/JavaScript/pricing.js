function transform(id) {
  // console.log(id);

  for (let i = 1; i <= 4; i++) {
    if (i == id) {
      let div = document.getElementById(`subscription${id}`);

      div.style.background = "#90221E";
      div.style.transform = "scale(1,1.05)";
      div.style.borderTop = "7px solid #C02D28";

      let icon = document.getElementById(`icon${id}`);
      icon.style.opacity = "1";
    } else {
      let div = document.getElementById(`subscription${i}`);

      div.style.background = "black";
      div.style.transform = "scale(1,1)";
      div.style.borderTop = "7px solid #3e3e3e";

      let icon = document.getElementById(`icon${i}`);
      icon.style.opacity = "0.4";
    }
  }
}
<<<<<<< HEAD
=======

function signup() {
 
  let emailId = document.getElementById("email").value;
  
  let user_data = {
    email: document.getElementById("email").value,
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    cpassword: document.getElementById("confirmPassword").value,
    payment_option: document.getElementById("payment_option").value,
    payment_detail: document.getElementById("payment_detail").value,
  };
  if(user_data.password !== user_data.cpassword) {
    alert("Passwords are not Same")
 
  }else {
    user_data = JSON.stringify(user_data);

    getuser(user_data, emailId);
  }
 
}

async function getuser(user, email) {
  try {
    let response = await fetch(`/users/${email}`, {
      method: "GET",
    });

    let data1 = await response.json();
    console.log(data1);

    if (data1.user) { 
      alert("Email already Registered"); 
      window.location.reload(); 
    }
    else{
      let res = await fetch("/users", {
        method: "POST",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
      });

      let data = await res.json();

      console.log("data:", data);
      alert("User successfully registered");
      window.location.href="/login";
      return data;
    }
  } catch (err) {
    console.log("err:", err);
  }
}
>>>>>>> dafae2e86b3dac7d2f595904bce00f134e8607fd
