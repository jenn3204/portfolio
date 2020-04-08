"use strict";

window.addEventListener("DOMContentLoaded", start);

let jsonData = [];
let splashClicked = false;

function start() {
  console.log("start");
  document.querySelector("#scroll_container").addEventListener("scroll", scrolling);
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
  getSvg("svg/arrow.svg", placeArrows);
  getJson("data.json");

  if (window.innerWidth < "700") {
    document.querySelector("#clipCircle").style.r = "2000";
    document.querySelector("#section1").style.height = "70vh";
  }

  document.querySelector("#works_info").classList.add("hide");
  document.querySelector("#paaske").addEventListener("click", showPaaske);
  document.querySelector("#port").addEventListener("click", showPort);
  document.querySelector("#museum").addEventListener("click", showMuseum);
  document.querySelector("#close").addEventListener("click", closeWork);
}

async function getJson(file) {
  let response = await fetch(file);
  jsonData = await response.json();

  document.querySelector("#section2_about p").textContent = jsonData[3].describtion;
}

async function getSvg(file, callback) {
  let response = await fetch(file);
  let svg = await response.text();
  callback(svg);
}

function placeShapes(svg) {
  document.querySelector("#shape1").innerHTML = svg;
  document.querySelector("#shape2").innerHTML = svg;
  document.querySelector("#shape3").innerHTML = svg;

  document.querySelector("#shape1 svg g path").classList.add("bubbly");
  document.querySelector("#shape2 svg g path").classList.add("bubbly");
  document.querySelector("#shape3 svg g path").classList.add("bubbly");
}

function placeSkills(svg) {
  document.querySelector("#skills_svg").innerHTML = svg;
}

function placeArrows(svg) {
  document.querySelector("#arrow1").innerHTML = svg;
}

function scrolling() {
  // scroll bar
  let scrollContainer = document.querySelector("#scroll_container");

  let ratio = scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight);
  document.querySelector("#scroll_bar").style.left = ratio * 95 + "vw";
}

function moveMouse(e) {
  console.log("her");
  document.querySelector("#clipCircle").setAttribute("cx", (e.pageX / window.innerWidth) * 1920);
  document.querySelector("#clipCircle").setAttribute("cy", (e.pageY / window.innerHeight) * 1920 * (window.innerHeight / window.innerWidth));
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
  document.querySelector("#works_video").src = jsonData[1].movie;
}

function showMuseum() {
  document.querySelector("#works_info").classList.add("hide");
  document.querySelector("#works_info").classList = "";
  document.querySelector("#works_info").classList.add("showopacity");

  if (window.innerWidth < "700") {
    document.querySelector("#works_info").scrollIntoView();
  }
  document.querySelector("#works_info h3").textContent = jsonData[2].title;
  document.querySelector("#works_info p").textContent = jsonData[2].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[2].knap;
  document.querySelector("#works_info #knap").href = jsonData[2].link;
  document.querySelector("#works_video").src = jsonData[2].movie;
}

function closeWork() {
  document.querySelector("#works_info").classList = "";
  document.querySelector("#works_info").classList.add("hideopacity");
}
