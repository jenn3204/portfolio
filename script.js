"use strict";

window.addEventListener("DOMContentLoaded", start);
window.addEventListener("resize", checkScreenSize);

let jsonData = [];
let splashClicked = false;

function start() {
  console.log("start");

  checkScreenSize();

  document.querySelector("#splash_txt").classList.add("showopacity2");
  document.querySelector("#section2_about").classList.add("hide");
  document.querySelector("#section2_skills").classList.add("hide");
  document.querySelector("#works_container").classList.add("transparent");

  document
    .querySelector("#burger_button")
    .addEventListener("click", burgerMenu);

  document
    .querySelector("#scroll_container")
    .addEventListener("scroll", scrolling);
  document.querySelector("#svg_blue").addEventListener("mousemove", moveMouse);

  document.querySelector("#section1").addEventListener("click", function () {
    if (splashClicked == false) {
      splashClicked = true;
      document.querySelector("#clipCircle").style.r = "2000";
    } else if (splashClicked == true) {
      splashClicked = false;
      document.querySelector("#clipCircle").style.r = "200";
    }
  });

  getSvg("svg/shape.svg", placeShapes);
  getSvg("svg/skills.svg", placeSkills);
  getSvg("svg/linkedin.svg", placeInLink);
  getSvg("svg/instagram.svg", placeInstaLink);
  getJson("data.json");

  document.querySelector("#works_info").classList.add("hide");
  document.querySelector("#paaske").addEventListener("click", showPaaske);
  document.querySelector("#port").addEventListener("click", showPort);
  document.querySelector("#green").addEventListener("click", showGreen);
  document.querySelector("#fart").addEventListener("click", showFart);
  document.querySelector("#museum").addEventListener("click", showMuseum);
  document.querySelector("#close").addEventListener("click", closeWork);
}

function checkScreenSize() {
  if (window.innerWidth > "700") {
    document.querySelector("#menu").classList = "";
    document.querySelector("#section1").style.height = "";
  }

  if (window.innerWidth < "700") {
    document.querySelector("#clipCircle").style.r = "2000";
    document.querySelector("#section1").style.height = "70vh";
    document.querySelector("#menu").classList.add("hideopacity2");
  }
}

function burgerMenu() {
  document.querySelector("#menu").classList.remove("hide");
  document.querySelector("#menu").classList.toggle("showopacity3");
  document.querySelector("#menu").classList.toggle("hideopacity2");

  let menuHidden = document
    .querySelector("#menu")
    .classList.contains("hideopacity2");

  if (menuHidden == true) {
    document.querySelector("#burger_button").textContent = "☰";
  } else {
    document.querySelector("#burger_button").textContent = "X";
  }

  document.querySelectorAll("#menu a").forEach((a) => {
    a.addEventListener("click", function () {
      document.querySelector("#menu").classList.add("hideopacity2");
      document.querySelector("#burger_button").textContent = "☰";
    });
  });
}

async function getJson(file) {
  let response = await fetch(file);
  jsonData = await response.json();

  document.querySelector("#section2_about p").innerHTML =
    jsonData[5].describtion;
}

async function getSvg(file, callback) {
  let response = await fetch(file);
  let svg = await response.text();
  callback(svg);
}

function placeShapes(svg) {
  document.querySelector("#shape1").innerHTML = svg;
  // document.querySelector("#shape2").innerHTML = svg;
  document.querySelector("#shape3").innerHTML = svg;
  document.querySelector("#shape4").innerHTML = svg;

  document.querySelector("#shape1 svg g path").classList.add("bubbly");
  // document.querySelector("#shape2 svg g path").classList.add("bubbly");
  document.querySelector("#shape3 svg g path").classList.add("bubbly");
  document.querySelector("#shape4 svg g path").classList.add("bubbly");
}

function placeSkills(svg) {
  document.querySelector("#skills_svg").innerHTML = svg;

  document.querySelector("#indesign").classList.add("wubbly");
  document.querySelector("#css").classList.add("wubbly");
  document.querySelector("#html").classList.add("wubbly");
  document.querySelector("#javascript").classList.add("wubbly");
  document.querySelector("#illustrator").classList.add("wubbly");
  document.querySelector("#premiere").classList.add("wubbly");
  document.querySelector("#xd").classList.add("wubbly");
  document.querySelector("#photoshop").classList.add("wubbly");
  // document.querySelector("#blue_shape").classList.add("wubbly");
}

function placeInstaLink(svg) {
  document.querySelector("#insta_logo").innerHTML = svg;
}

function placeInLink(svg) {
  document.querySelector("#in_logo").innerHTML = svg;
}

function scrolling() {
  // scroll bar
  let scrollContainer = document.querySelector("#scroll_container");

  let ratio =
    scrollContainer.scrollTop /
    (scrollContainer.scrollHeight - scrollContainer.clientHeight);
  document.querySelector("#scroll_bar").style.left = ratio * 95 + "vw";

  // show things when scrolled into view
  const section2 = document.querySelector("#section2");
  const section3 = document.querySelector("#section3");
  console.log(scrollContainer.scrollTop);
  console.log(section2.offsetTop - "100");

  if (scrollContainer.scrollTop >= section2.offsetTop - "300") {
    document.querySelector("#section2_about").classList.remove("hide");
    document.querySelector("#section2_about p").classList.add("showopacity");
    document.querySelector("#section2_about h3").classList.add("showopacity");
    // document.querySelector("#shape2").classList.add("showopacity");
  }

  if (scrollContainer.scrollTop >= section2.offsetTop) {
    document.querySelector("#section2_skills").classList.remove("hide");
    document.querySelector("#section2_skills svg").classList.add("showopacity");
  }

  if (scrollContainer.scrollTop >= section3.offsetTop - "500") {
    document.querySelector("#works_container").classList.remove("transparent");
    document.querySelector("#works_container").classList.add("showopacity2");
  }
}

function moveMouse(e) {
  console.log("her");
  document
    .querySelector("#clipCircle")
    .setAttribute("cx", (e.pageX / window.innerWidth) * 1920);
  document
    .querySelector("#clipCircle")
    .setAttribute(
      "cy",
      (e.pageY / window.innerHeight) *
        1920 *
        (window.innerHeight / window.innerWidth)
    );
  e.preventDefault();
}

function showPaaske() {
  document.querySelector("#works_info").classList = "";
  document.querySelector("#works_info").classList.add("showopacity");

  if (window.innerWidth < "700") {
    document.querySelector("#works_info").scrollIntoView();
    console.log(window.innerWidth);
  }
  document.querySelector("#works_info h3").textContent = jsonData[0].title;
  document.querySelector("#works_info p").textContent = jsonData[0].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[0].knap;
  document.querySelector("#works_info #knap").href = jsonData[0].link;
  document.querySelector("#works_info #video_link").href = jsonData[0].link;
  document.querySelector("#works_video").src = jsonData[0].movie;
}

function showPort() {
  document.querySelector("#works_info").classList = "";
  document.querySelector("#works_info").classList.add("showopacity");

  if (window.innerWidth < "700") {
    document.querySelector("#works_info").scrollIntoView();
  }
  document.querySelector("#works_info h3").textContent = jsonData[1].title;
  document.querySelector("#works_info p").textContent = jsonData[1].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[1].knap;
  document.querySelector("#works_info #knap").href = jsonData[1].link;
  document.querySelector("#works_info #video_link").href = jsonData[1].link;
  document.querySelector("#works_video").src = jsonData[1].movie;
}

function showGreen() {
  document.querySelector("#works_info").classList = "";
  document.querySelector("#works_info").classList.add("showopacity");

  if (window.innerWidth < "700") {
    document.querySelector("#works_info").scrollIntoView();
  }
  document.querySelector("#works_info h3").textContent = jsonData[2].title;
  document.querySelector("#works_info p").textContent = jsonData[2].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[2].knap;
  document.querySelector("#works_info #knap").href = jsonData[2].link;
  document.querySelector("#works_info #video_link").href = jsonData[2].link;
  document.querySelector("#works_video").src = jsonData[2].movie;
}

function showFart() {
  document.querySelector("#works_info").classList = "";
  document.querySelector("#works_info").classList.add("showopacity");

  if (window.innerWidth < "700") {
    document.querySelector("#works_info").scrollIntoView();
  }
  document.querySelector("#works_info h3").textContent = jsonData[3].title;
  document.querySelector("#works_info p").textContent = jsonData[3].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[3].knap;
  document.querySelector("#works_info #knap").href = jsonData[3].link;
  document.querySelector("#works_info #video_link").href = jsonData[3].link;
  document.querySelector("#works_video").src = jsonData[3].movie;
}

function showMuseum() {
  document.querySelector("#works_info").classList.add("hide");
  document.querySelector("#works_info").classList = "";
  document.querySelector("#works_info").classList.add("showopacity");

  if (window.innerWidth < "700") {
    document.querySelector("#works_info").scrollIntoView();
  }
  document.querySelector("#works_info h3").textContent = jsonData[4].title;
  document.querySelector("#works_info p").textContent = jsonData[4].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[4].knap;
  document.querySelector("#works_info #knap").href = jsonData[4].link;
  document.querySelector("#works_info #video_link").href = jsonData[4].link;
  document.querySelector("#works_video").src = jsonData[4].movie;
}

function closeWork() {
  document.querySelector("#works_info").classList = "";
  document.querySelector("#works_info").classList.add("hideopacity");

  if (window.innerWidth < "700") {
    document.querySelector("#works_txt").scrollIntoView();
  }
}
