const DOM = {
  item: ".fancy-nav__item",
  itemList: ".fancy-nav__list",
  images: ".fancy-nav__img"
};
const itemList = document.querySelector(DOM.itemList);

function getCurrentItemIndex(item) {
  const fancyItems = document.querySelectorAll(DOM.item);
  const currentIndex = Array.from(fancyItems).indexOf(item);

  return currentIndex;
}

function changeMainImage(currentIndex) {
  const fancyImgs = document.querySelectorAll(DOM.images);

  fancyImgs.forEach((imgElem, index) => {
    imgElem.style.opacity = 0;

    if (index === currentIndex) {
      imgElem.style.opacity = 1;
    }
  });
}

itemList.addEventListener("mouseover", (event) => {
  const target = event.target;

  if (target.closest(DOM.item)) {
    const currentFancyItemIndex = getCurrentItemIndex(target.closest(DOM.item));

    changeMainImage(currentFancyItemIndex);
  }
});