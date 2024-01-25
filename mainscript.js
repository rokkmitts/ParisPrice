"use strict";

const imgItems = document.querySelectorAll(".img-item");
const vidItems = document.querySelectorAll(".vid-item");
const container = document.querySelector(".container");
const numberOfImgItems = imgItems.length;
const numberOfVidItems = vidItems.length;

// ratio of a circle circumference against its diamter.
// Degree of angle for each img in the container
const angleIncremeent = (2 * Math.PI) / (numberOfImgItems + numberOfVidItems);
const radius = 300;
let isGalleryOpen = false;

// pixels corresponding to integer
const centerX = container.offsetWidth / 2;
const centerY = container.offsetHeight / 2;

const tl = gsap.timeline();

items.forEach(function (item, index) {
  const img = document.createElement("img");
  const video = document.createElement("video");

  img.src = "./mediaAssets/img" + (index + 1) + ".jpg";
  img.appendChild(img);

  video.src = "./mediaAssets/vid" + (index + 1) + ".mp4";
});
