// select menu element
const menu = document.getElementById("menu");
// select menu items
const menuItem = document.getElementsByClassName("menu-item");

// convert menu items to array to become iterable
Array.from(menuItem).forEach((item, index) => {
    // append mouse listener to each item
    item.onmouseover = () => {
        // update activeIndex data attribute on menu element
        menu.dataset.activeIndex = index;
    }
})