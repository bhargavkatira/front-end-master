    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
    import { getDatabase, ref,set, child, get } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDst2voFYSVoBCSn5-TkAei5q7xe3ayZXY",
      authDomain: "cool-ship-302919.firebaseapp.com",
      databaseURL: "https://cool-ship-302919-default-rtdb.firebaseio.com",
      projectId: "cool-ship-302919",
      storageBucket: "cool-ship-302919.appspot.com",
      messagingSenderId: "154859541000",
      appId: "1:154859541000:web:8866e6e5b2ea1514ab77bd"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDatabase(app);
    const dbRef = ref(db);


    document.getElementById("signin").addEventListener('click',function(){



        const emaill = document.getElementById("emaill").value
        const passl = document.getElementById("passl").value
        
        signInWithEmailAndPassword(auth, emaill, passl)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            get(child(dbRef, `users1`)).then((snapshot) => {
                if (snapshot.exists()) {
                  console.log(snapshot.val());
                var   obj = snapshot.val().username
                console.log(obj);
                  localStorage.setItem("user1",JSON.stringify(obj))

                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
            console.log("logged in");
            alert("logged in")
            window.location.href="./account.html"
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
            alert(errorMessage)
          });
        
        
            })


            document.getElementById("forget").addEventListener('click',function(){

                const email = document.getElementById("emaill").value
                
                sendPasswordResetEmail(auth, email)
                  .then(() => {
                    // Password reset email sent!
                    // ..
                    alert("Password reset email sent!")
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                  });
                
                
                
                
                    })