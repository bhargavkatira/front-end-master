
console.log(" I am goin to take data")



async function getdata_lp() {
  try{
    response = await fetch("/learns");

    data = await response.json();
     console.log(data, "I am here")
    appendCourseType(data);
    return data;
  }

  catch(e){console.log(e)}
  }


  getdata_lp();

  console.log("I am here too")

   lp_parent = document.getElementById("lp_parent");

  function appendCourseType(dataarr) {

    dataarr.forEach((item) => {
      div = document.createElement("div");

      outer_circle = document.createElement("div");
      outer_circle.setAttribute("class", "out_circle");
      inner_circle = document.createElement("div");
      inner_circle.setAttribute("class", "in_circle");

      pc = document.createElement("p");

      playcount(pc);

      pc.setAttribute("id", "counter");
      pc.setAttribute("class", "counter");

      inner_circle.append(pc);
      outer_circle.append(inner_circle);

      h2 = document.createElement("h2");
      h2.innerHTML = item.level;
                                                       
      p = document.createElement("p");
      p.innerHTML = item.description.slice(0,50);
      p.style.fontSize = "16px";

      div2 = document.createElement("div");
      div3 = document.createElement("div");

      startbtn = document.createElement("button");
      startbtn.onclick = () => {
        openCourses(item);
      };

      startbtn.innerText = "start";

      svg_cir = document.createElement("div");
      svg_cir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="120" cy="124" r="106" stroke-linecap="round" />
 </svg>`;
      svg_cir.setAttribute("class", "svg_cir");

      div3.append(startbtn);
      div3.setAttribute("id", "start-btn-div");
      div2.append(h2, p);
      div2.setAttribute("class", "cont");
      div.append(outer_circle, svg_cir, div2, div3);

      lp_parent.append(div);
    });
  }

  function openCourses(item) {
    console.log(item);

    localStorage.setItem("course_l", JSON.stringify(item));

    window.location.href = "/course";

  }

  pc = document.querySelector("class", "counter");

  // console.log(pc);

  // let counter = document.getElementById('counter')
  function playcount(counter) {
    let number = 0;

    int1 = setInterval(() => {
      if (number === 100) {
        clearInterval();

        int2 = setInterval(() => {
          if (number <= 0) {
            clearInterval();
          } else {
            number -= 1;

            counter.innerHTML = number + "%";
          }
        }, 20);
      } else {
        number += 0;

        counter.innerHTML = number + "%";
      }
    }, 20);
  }

