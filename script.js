

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