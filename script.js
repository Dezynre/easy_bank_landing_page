

setMenuStatesProperly()
Hide_Mobile_Menu_On_Window_Click()


function setMenuStatesProperly() {
    let menu_icon = document.querySelector("#menu_icon")
    let image = document.querySelector("#menu_image")
    let menu = document.querySelector("#nav_links")
    menu_icon.addEventListener("click", (event)=>{
        event.stopPropagation()
        if (menu.style.display === "flex" && window.innerWidth <= 768) {
            menu.style.display = ""
            menu_icon.style.width = "35px"
            image.src = "./images/icon-hamburger.svg"
        } else if (menu.style.display === "" && window.innerWidth <= 768) {
            menu.style.display = "flex"
            menu_icon.style.width = "25px"
            image.src = "./images/icon-close.svg"
        }
    })
}



function Hide_Mobile_Menu_On_Window_Click() {
    window.addEventListener("click", (event)=>{
        let menu_icon = document.querySelector("#menu_icon")
        let image = document.querySelector("#menu_image")
        let menu = document.querySelector("#nav_links")
        if (menu.style.display === "flex") {
            menu.style.display = ""
            menu_icon.style.width = "35px"
            image.src = "./images/icon-hamburger.svg"
        }
    })
}


// the following code snippets are used to control this sites scroll animation


function animate_on_scroll() {
    let elements_to_animate = document.querySelectorAll(".animate_on_scroll")
    for(let i=0; i<elements_to_animate.length; i++) {
        let viewport_height = window.innerHeight
        let distance_from_top_of_viewport = elements_to_animate[i].getBoundingClientRect().top
        let distance = 50
        if (distance_from_top_of_viewport < viewport_height-distance) {
            elements_to_animate[i].classList.add("active")
        } else {
            elements_to_animate[i].classList.remove("active")
        }
    }
}

window.addEventListener("scroll", animate_on_scroll)
animate_on_scroll()