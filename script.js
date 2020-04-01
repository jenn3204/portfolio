"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  document.querySelector("#scroll_container").addEventListener("scroll", scrolling);
}

function scrolling() {
  console.log("scrollig");
  let scrollContainer = document.querySelector("#scroll_container");
  let ratio = scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight);
  console.log(ratio);

  document.querySelector("#scroll_bar").style.left = ratio * 98 + "vw";
  console.log("hej");
}
