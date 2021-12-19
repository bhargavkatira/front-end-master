function signIn(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user_data = {
  email,
  password,    
  };

  user_data = JSON.stringify(user_data);

  loginUser(user_data,email);
}

async function loginUser(user,email) {
  try {
    let response = await fetch(`/users/${email}`, {
      method: "GET",
    });

    let data1 = await response.json();

    // console.log("Frontend_User:",data1.user);

    if(data1.user == null) {
      alert("User Not Registered");
      window.location.reload();
    }else {
      let res = await fetch(`/users/${email}`, {
        method: "POST",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data2 = await res.json();
      if(data2.status === "Failed") {
        alert("Invalid Email or Password")
        window.location.reload();
      }else {
        console.log("Frontend_User:",data2.user)

      if (localStorage.getItem("frontend_user") === null) {
      
      localStorage.setItem("frontend_user", JSON.stringify([]));

      let arr = JSON.parse(localStorage.getItem("frontend_user"));
      arr=[];
      arr.push(data2.user);
      localStorage.setItem("frontend_user", JSON.stringify(arr));
      
      } else {
      
      let arr = JSON.parse(localStorage.getItem("frontend_user"));
      arr=[];
      arr.push(data2.user);
      localStorage.setItem("frontend_user", JSON.stringify(arr));
      }
        
        alert(`Welcome ${data2.user.first_name} !!`)
        window.location.href="/account"
      }  
      
    }
   
  } catch (err) {
    console.log("err:", err);
  }
}
