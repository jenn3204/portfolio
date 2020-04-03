"use strict";

window.addEventListener("DOMContentLoaded", start);

let jsonData = [];

function start() {
  console.log("start");
  document.querySelector("#scroll_container").addEventListener("scroll", scrolling);
  document.querySelector("#svg_blue").addEventListener("mousemove", moveMouse);

  document.querySelector("#section1").addEventListener("click", function() {
    document.querySelector("#clipCircle").style.r = "2000";
  });

  getSvg("svg/shape.svg", placeShape1);
  getSvg("svg/shape.svg", placeShape3);
  getJson("data.json");

  if (window.innerWidth < "700") {
    document.querySelector("#clipCircle").style.r = "2000";
    document.querySelector("#section1").style.height = "70vh";
  }

  document.querySelector("#paaske").addEventListener("click", showPaaske);
  document.querySelector("#port").addEventListener("click", showPort);
  document.querySelector("#museum").addEventListener("click", showMuseum);
}

async function getJson(file) {
  let response = await fetch(file);
  jsonData = await response.json();
}

async function getSvg(file, callback) {
  let response = await fetch(file);
  let svg = await response.text();
  callback(svg);
}

function placeShape1(svg) {
  document.querySelector("#shape1").innerHTML = svg;
  document.querySelector("#shape1 svg g path").classList.add("bubbly");
}

function placeShape3(svg) {
  document.querySelector("#shape3").innerHTML = svg;
  document.querySelector("#shape3 svg g path").classList.add("bubbly");
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
  document.querySelector("#works_info").scrollIntoView();
  document.querySelector("#works_info h3").textContent = jsonData[0].title;
  document.querySelector("#works_info p").textContent = jsonData[0].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[0].knap;
  document.querySelector("#works_info #knap").href = jsonData[0].link;
  document.querySelector("#works_video").src = jsonData[0].movie;
}

function showPort() {
  document.querySelector("#works_info").scrollIntoView();
  document.querySelector("#works_info h3").textContent = jsonData[1].title;
  document.querySelector("#works_info p").textContent = jsonData[1].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[1].knap;
  document.querySelector("#works_info #knap").href = jsonData[1].link;
  document.querySelector("#works_video").src = jsonData[1].movie;
}

function showMuseum() {
  document.querySelector("#works_info").scrollIntoView();
  document.querySelector("#works_info h3").textContent = jsonData[2].title;
  document.querySelector("#works_info p").textContent = jsonData[2].describtion;
  document.querySelector("#works_info #knap").textContent = jsonData[2].knap;
  document.querySelector("#works_info #knap").href = jsonData[2].link;
  document.querySelector("#works_video").src = jsonData[2].movie;
}
