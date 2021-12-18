function update(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let password = document.getElementById("new_password").value;
  
    let user_data = {
    email,
    first_name,
    last_name,   
    password, 
    };
  
    user_data = JSON.stringify(user_data);
  
    loginUser(user_data,email);
  }
  
  async function loginUser(user,email) {
    try {
      let response = await fetch(`/users/${email}`, {
        method: "PATCH",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
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
          alert(`Welcome ${data2.user.first_name} !!`)
          window.location.href="/account"
        }  
        
      }
     
    } catch (err) {
      console.log("err:", err);
    }
  }
  