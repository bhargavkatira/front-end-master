let frontend = JSON.parse(localStorage.getItem("frontend_user"));

let user_mail = frontend[0].email;

let login = document.getElementById("logouttxt");
login.innerHTML = `Log Out (${frontend[0].first_name})`
 
let username =  document.getElementById("u1");
username.innerHTML = `${frontend[0].first_name} ${frontend[0].last_name} `;


function update(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
  
    let user_data = {
    email:email,
    first_name:first_name,
    last_name:last_name,   
    };
  
    user_data = JSON.stringify(user_data);
    console.log(user_data);
    loginUser(user_data);
  }
  
  async function loginUser(user) {
    try {
      let response = await fetch(`/users/${user_mail}`, {
        method: "PATCH",
        body: user,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      let data1 = await response.json();
      alert("User updated successfully !!")
      console.log("Frontend_User:",data1);
    
     
    } catch (err) {
      console.log("err:", err);
    }
  }
  