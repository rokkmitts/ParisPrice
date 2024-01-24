"use strict";

const items = document.querySelectorAll(".item");
const container = document.querySelector(".container");
const numberOfItems = items.length;

// ratio of a circle circumference against its diamter.
// Degree of angle for each img in the container
const angleIncremeent = (2 * Math.PI) / numberOfItems;
const radius = 300;
let isGalleryOpen = false;

// pixels corresponding to integer
const centerX = container.offsetWidth / 2;
const centerY = container.offsetHeight / 2;

const tl = gsap.timeline();
