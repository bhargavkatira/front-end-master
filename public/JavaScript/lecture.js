
  lect_parent = document.getElementById("lect_parent");
  lectures = JSON.parse(localStorage.getItem("lectures_s"));

  console.log(lectures);
  dataarr = lectures.insidebox_Watch_lectures;
  lectureappend(dataarr);

  function lectureappend(dataarr) {
    dataarr.forEach((item) => {
      div = document.createElement("div");

      img_div = document.createElement("div");
      img = document.createElement("img");
      img.src = item.thumbpic;
      img_div.append(img);

      p1 = document.createElement("p");
      p1.innerHTML = item.name;
      p1.setAttribute("class", "nameheading");

      p2 = document.createElement("p");
      p2.innerHTML = item.litDes;

      cont_div = document.createElement("div");

      cont_div.append(p1, p2);

      div.append(img_div, cont_div);
      lect_parent.append(div);
    });

    console.log(dataarr);
  }
