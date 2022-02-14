const DOM = {
  item: ".fancy-nav__item",
  itemList: ".fancy-nav__list"
};
const itemList = document.querySelector(DOM.itemList);

function getCurrentItemIndex(item) {
  const fancyItems = document.querySelectorAll(DOM.item);
  const currentIndex = Array.from(fancyItems).indexOf(item);

  return currentIndex;
}

itemList.addEventListener("mouseover", (event) => {
  const target = event.target;

  if (target.closest(DOM.item)) {
    const currentFancyItemIndex = getCurrentItemIndex(target.closest(DOM.item));

    console.log(currentFancyItemIndex);
  }
});
