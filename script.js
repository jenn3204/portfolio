"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  document.querySelector("#scroll_container").addEventListener("scroll", scrolling);
  document.querySelector("#svg_blue").addEventListener("mousemove", moveMouse);
}

function scrolling() {
  // scroll bar
  let scrollContainer = document.querySelector("#scroll_container");
  let ratio = scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight);
  document.querySelector("#scroll_bar").style.left = ratio * 98 + "vw";
}

function moveMouse(e) {
  console.log("her");
  document.querySelector("#clipCircle").setAttribute("cx", (e.pageX / window.innerWidth) * 1920);
  document.querySelector("#clipCircle").setAttribute("cy", (e.pageY / window.innerHeight) * 1920 * (window.innerHeight / window.innerWidth));
  e.preventDefault();
}
