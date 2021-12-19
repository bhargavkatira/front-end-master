async function getData() {

let res = await fetch(`/instructors`, {
    method: "GET"
  });
  let data = await res.json();
  
 appendData(data);
}
getData();
let container = document.getElementById("container");

function appendData(data) {
    console.log("data:", data);
    data.forEach ((item) => {
       let teacherDiv = document.createElement("div");
       teacherDiv.setAttribute("class", "teacherDiv"); 

       let name = document.createElement("p");
       name.setAttribute("class", "teacherName")
       name.innerHTML = item.name;

       let speciality = document.createElement("p")
       speciality.setAttribute("class","speciality")
       speciality.innerHTML = item.speciality; 

       let img = document.createElement("img");
       img.setAttribute("class","teacherImg")
       img.src = item.img ;

       teacherDiv.append(name,speciality,img);
       container.append(teacherDiv);
    })
} 

