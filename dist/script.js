const DOM = {
  item: ".fancy-nav__item",
  itemList: ".fancy-nav__list",
  images: ".fancy-nav__img",
  tabList: ".fancy-nav__tabs",
  tab: ".fancy-nav__tab",
  tabCloseBtn: ".fancy-nav__close-btn"
};
const fancyItemList = document.querySelector(DOM.itemList);
const fancyItems = document.querySelectorAll(DOM.item);
const fancyTabList = document.querySelector(DOM.tabList);
const fancyTabs = document.querySelectorAll(DOM.tab);
const fancyTabCloseBtn = document.querySelector(DOM.tabCloseBtn);

function getCurrentElemIndex(list, item) {
  const currentIndex = Array.from(list).indexOf(item);

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
  fancyTabList.classList.add("is-visible");

  const currentTab = fancyTabs[currentIndex];

  currentTab.classList.add("is-visible");
}

function closeFancyTab(currentIndex) {
  fancyTabList.classList.remove("is-visible");

  const currentTab = fancyTabs[currentIndex];

  currentTab.classList.remove("is-visible");
}

fancyItemList.addEventListener("mouseover", (event) => {
  const target = event.target;

  if (target.closest(DOM.item)) {
    const currentFancyItemIndex = getCurrentElemIndex(
      fancyItems,
      target.closest(DOM.item)
    );

    changeMainImage(currentFancyItemIndex);
  }
});

fancyItemList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(DOM.item)) {
    const currentFancyItemIndex = getCurrentElemIndex(
      fancyItems,
      target.closest(DOM.item)
    );

    openFancyTab(currentFancyItemIndex);
  }
});

fancyTabList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(DOM.tabCloseBtn)) {
    const currentFancyItemIndex = getCurrentElemIndex(
      fancyTabs,
      target.closest(DOM.tab)
    );

    closeFancyTab(currentFancyItemIndex);
  }
});