const trip_grids = document.querySelectorAll(".trips_grid .grid")
const sidebar_items = document.querySelectorAll(".sidebar ul li")


sidebar_items[0].classList.add("active");
trip_grids[0].style.display = "block"
sidebar_items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
        sidebar_items.forEach((item) => { item.classList.remove("active") })
        item.classList.add("active")
        trip_grids.forEach((grid) => { grid.style.display = "none" })
        trip_grids[index].style.display = "block"
    })
})
console.log(sidebar_items[0])


// search screen here

const search_box = document.querySelector(".search_screen .search_box");
const search_cover = document.querySelector(".search_screen .search_cover")
const search_start = document.querySelectorAll("header .search_start")
const search_screen = document.querySelector("header .search_screen")
const cross_icon = document.querySelector("header .search_screen .cross_icon")

const search_box_height = search_box.clientHeight;
search_cover.style.height = `calc(100vh - ${search_box_height}px)`;

search_start.forEach((sicon) => {
    sicon.addEventListener("click", () => {
        search_screen.style.display = "flex";
    })
})
cross_icon.addEventListener("click", () => {
    search_screen.style.display = "none";
})



// vertical navigation here
const clickThis = document.querySelectorAll("header .vertical_nav .click_this")
const clickDown = document.querySelectorAll("header .vertical_nav .click_down")

clickThis.forEach((each, index) => {
    each.addEventListener("click", () => {
        const isOpen = parseFloat(clickDown[index].style.height) > 0;

        // Close all
        clickDown.forEach(down => down.style.height = "0px");

        // Open only if it was closed
        if (!isOpen) {
            clickDown[index].style.height = `${clickDown[index].scrollHeight}px`;
        }
    });
})

const hamburger = document.querySelectorAll("header .Hbar");
const verticalNav = document.querySelector("header .vertical_nav");
const open = document.querySelector("header .mobile_nav .open");
const close = document.querySelector("header .mobile_nav .close");


hamburger.forEach((ham) => {
    ham.addEventListener("click", (e) => {
        e.stopImmediatePropagation();   // prevent other clicks
        const isOpen = parseFloat(verticalNav.style.height) > 0;
        if (!isOpen) {
            verticalNav.style.height = `${verticalNav.scrollHeight}px`;
            close.style.display="flex"
            open.style.display="none"
        }else{
            verticalNav.style.height = "0px";
            close.style.display="none"
            open.style.display="flex"
        }
    });
})