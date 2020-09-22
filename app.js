const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");

const sliderItems = document.querySelectorAll(".slide-item");
const sliderContainer = document.querySelector(".carousel-slider");

let index = 0;

function translateXByIndex(i) {
  const slideItemWidth = sliderItems[0].offsetWidth;
  const offset = i * slideItemWidth;
  sliderContainer.style.transform = offset
    ? `translateX(-${offset}px)`
    : "none";
}

prevBtns.forEach((element) => {
  element.addEventListener("click", () => {
    index = index === 0 ? sliderItems.length - 1 : index - 1;
    translateXByIndex(index);
  });
});

nextBtns.forEach((element) => {
  element.addEventListener("click", () => {
    index = index === sliderItems.length - 1 ? 0 : index + 1;
    translateXByIndex(index);
  });
});
