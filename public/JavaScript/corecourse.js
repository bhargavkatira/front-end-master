lp_parent = document.getElementById("lp_parent");

items = JSON.parse(localStorage.getItem("course_l"));

let about = document.getElementById("about_c");

about.innerText = items.about;

let small_about = document.getElementById("small_about_c");
small_about.innerText = items.insidebox.smallabout;

let arr = items.insidebox.coreContents;

appendcourselist(arr);

function appendcourselist(arr) {
  arr.forEach((item) => {
    div = document.createElement("div");
    div.setAttribute("class", "core_box");

    img_div = document.createElement("div");
    img_div.setAttribute("class", "core_img_div");
    img = document.createElement("img");
    img.style.width = "300px";
    img.style.height = "300px";
    img.src = item.courseimg;
    img_div.append(img);

    cont_div = document.createElement("div");

    h1 = document.createElement("h1");
    h1.innerText = item.itemname;

    ins_div = document.createElement("div");
    ins_div.setAttribute("class", "ins_div");
    ins_img = document.createElement("img");
    ins_img.src = item.instructorImg;
    ins_img.style.width = "75px";
    ins_img.style.height = "75px";
    ins_img.style.borderRadius = "50%";

    ins_name = document.createElement("p");

    ins_name.setAttribute("id", "in_name");
    ins_name.innerText = item.instructor;

    ins_div.append(ins_img, ins_name);

    ins_about = document.createElement("p");
    ins_about.innerText = item.aboutcourse;

    btn_div = document.createElement("div");
    btn_div.setAttribute("class", "btn_div");

    watch_free_btn = document.createElement("button");
    watch_free_btn.setAttribute("id", "w_free_btn");
    watch_free_btn.innerText = "Watch Free Preview";
    watch_free_btn.onclick = () => {
      lectures(item);
    };

    full_ac_btn = document.createElement("button");
    full_ac_btn.innerText = "Get Full Access";

    full_ac_btn.onclick = function () {
      window.location.href = "Payment.html";
    };
    full_ac_btn.setAttribute("id", "w_full_btn");

    btn_div.append(watch_free_btn, full_ac_btn);

    cont_div.append(h1, ins_div, ins_about, btn_div);
    cont_div.setAttribute("class", "core_cont_div");

    div.append(img_div, cont_div);
    lp_parent.append(div);
  });
}

function lectures(item) {
  console.log(item);
  localStorage.setItem("lectures_s", JSON.stringify(item));

  window.location.href = "lecture.html";
}

svg_circle = document.getElementById("svg_el");
svg_circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="130" cy="130" r="116" stroke-linecap="round" />
 </svg>`;

let counter = document.getElementById("counter");

let number = 0;

int1 = setInterval(() => {
  if (number == 100) {
    clearInterval(int1);

    int2 = setInterval(() => {
      if (number <= 0) {
        clearInterval(int2);
      } else number -= 10;

      counter.innerHTML = number + "%";
    }, 20);
  } else {
    number += 1;

    counter.innerHTML = number + "%";
  }
}, 20);
