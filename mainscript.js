"use strict";

// // arrays for selected items
const items = document.querySelectorAll(".item");
const container = document.querySelector(".container");
const numberOfItems = items.length;
const angleIncremeent = (2 * Math.PI) / numberOfItems;
const radius = 300;

// condition for click events
let isGalleryOpen = false;
// pixel measurement of the container x and y axis
const centerX = container.offsetWidth / 2;
const centerY = container.offsetHeight / 2;

// animation sequence shorthand
const tl = gsap.timeline();

items.forEach(function (item, index) {
  const img = document.createElement("img");
  img.src = "./mediaAssets/img/" + "img" + (index + 1) + ".jpg";
  item.appendChild(img);

  const angle = index * angleIncremeent;
  const initialRotation = (angle * 180) / Math.PI - 90;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  gsap.set(item, { scale: 0 });
  tl.to(
    item,
    {
      left: x + "px",
      top: y + "px",
      rotation: initialRotation,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      delay: 1,
    },
    index * 0.1
  );
});
