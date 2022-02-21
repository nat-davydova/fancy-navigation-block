const DOM = {
  item: ".fancy-nav__item",
  itemList: ".fancy-nav__list",
  images: ".fancy-nav__img",
  tabList: ".fancy-nav__tabs",
  tab: ".fancy-nav__tab",
  tabCloseBtn: ".fancy-nav__close-btn",
  tabImg: ".fancy-nav__tab-img",
  tabDescr: ".fancy-nav__tab-description",
  isVisible: "is-visible"
};
const fancyItemList = document.querySelector(DOM.itemList);
const fancyItems = document.querySelectorAll(DOM.item);
const fancyTabList = document.querySelector(DOM.tabList);
const fancyTabs = document.querySelectorAll(DOM.tab);

function openFancyTab(currentIndex) {
  fancyTabList.classList.add(DOM.isVisible);

  const currentTab = fancyTabs[currentIndex];

  currentTab.classList.add(DOM.isVisible);

  addAnimationClassesOnTabOpen(currentTab);
}

function closeFancyTab(currentIndex) {
  fancyTabList.classList.remove(DOM.isVisible);

  const currentTab = fancyTabs[currentIndex];

  currentTab.classList.remove(DOM.isVisible);

  removeAnimationClassesOnTabClose(currentTab);
}

function addAnimationClassesOnTabOpen(currentTab) {
  const currentTabCloseBtn = currentTab.querySelector(DOM.tabCloseBtn);

  currentTabCloseBtn.classList.add(DOM.isVisible);

  const currentTabImg = currentTab.querySelector(DOM.tabImg);

  currentTabImg.classList.add(DOM.isVisible);

  const currentTabDescr = currentTab.querySelector(DOM.tabDescr);

  currentTabDescr.classList.add(DOM.isVisible);
}

function removeAnimationClassesOnTabClose(currentTab) {
  const currentTabCloseBtn = currentTab.querySelector(DOM.tabCloseBtn);

  currentTabCloseBtn.classList.remove(DOM.isVisible);

  const currentTabImg = currentTab.querySelector(DOM.tabImg);

  currentTabImg.classList.remove(DOM.isVisible);

  const currentTabDescr = currentTab.querySelector(DOM.tabDescr);

  currentTabDescr.classList.remove(DOM.isVisible);
}

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
