const DOM = {
  item: ".fancy-nav__item",
  itemList: ".fancy-nav__list",
  images: ".fancy-nav__img",
  tabList: ".fancy-nav__tabs",
  tab: ".fancy-nav__tab"
};
const fancyItemList = document.querySelector(DOM.itemList);
const fancyItems = document.querySelectorAll(DOM.item);

function getCurrentItemIndex(item) {
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

function openFancyTab(currentIndex) {
  const tabList = document.querySelector(DOM.tabList);
  tabList.classList.add("is-visible");

  const currentTab = document.querySelectorAll(DOM.tab)[currentIndex];

  currentTab.classList.add("is-visible");
}

fancyItemList.addEventListener("mouseover", (event) => {
  const target = event.target;

  if (target.closest(DOM.item)) {
    const currentFancyItemIndex = getCurrentItemIndex(target.closest(DOM.item));

    changeMainImage(currentFancyItemIndex);
  }
});

fancyItemList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(DOM.item)) {
    const currentFancyItemIndex = getCurrentItemIndex(target.closest(DOM.item));

    openFancyTab(currentFancyItemIndex);
  }
});
