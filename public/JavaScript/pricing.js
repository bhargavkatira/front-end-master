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
