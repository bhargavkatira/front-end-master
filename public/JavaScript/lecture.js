async function getdata_lp() {
  try{
    response = await fetch("/lectures");

    data = await response.json();
     console.log(data, "I am here")
     lectureappend(data);
    return data;
  }

  catch(e){console.log(e)}
  }


  getdata_lp();



  lect_parent = document.getElementById("lect_parent");
  lectures = JSON.parse(localStorage.getItem("lectures_s"));

  // console.log(lectures);
  // dataarr = lectures.lecture_ids;
  // lectureappend(dataarr);

  function lectureappend(dataarr) {
    try{
    dataarr.forEach((item) => {
      div = document.createElement("div");

      img_div = document.createElement("div");
      img = document.createElement("img");
      img.src = item.img;
      img_div.append(img);

      p1 = document.createElement("p");
      p1.innerHTML = item.title;
      p1.setAttribute("class", "nameheading");

      p2 = document.createElement("p");
      p2.innerHTML = item.content;

      cont_div = document.createElement("div");

      cont_div.append(p1, p2);

      div.append(img_div, cont_div);
      lect_parent.append(div);
    });

    console.log(dataarr);
  }

  catch(e){console.log(e)}
  }
