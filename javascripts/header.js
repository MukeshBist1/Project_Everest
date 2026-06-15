const trip_grids=document.querySelectorAll(".trips_grid .grid")
const sidebar_items=document.querySelectorAll(".sidebar ul li")


sidebar_items[0].classList.add("active");
trip_grids[0].style.display="block"
sidebar_items.forEach((item,index)=>{
    item.addEventListener("mouseenter",()=>{
        sidebar_items.forEach((item)=>{item.classList.remove("active")})
        item.classList.add("active")
        trip_grids.forEach((grid)=>{grid.style.display="none"})
        trip_grids[index].style.display="block"
    })
})
console.log(sidebar_items[0])