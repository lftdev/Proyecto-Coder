const btn_menu = document.querySelector("#btn-menu")
btn_menu.addEventListener("click", on_click_menu)

const signup_window = document.querySelector("#div-signup-window")

window.addEventListener("scroll", () => {
    sw_color_on_scroll(window.scrollY)
});

function on_click_menu() {
    document.querySelector("header").classList.toggle("deployed")
    document.querySelector("#nav-menu-header").classList.toggle("hide-on-screen-sm")
    document.querySelector("header .social-nav").classList.toggle("set-closed")
    document.querySelectorAll("#btn-menu span").forEach(span => {
        span.classList.toggle("deployed")
    })
    
}

function sw_color_on_scroll(scrollY) {
    let mutable_header = document.querySelector("header.mutable")
    if (mutable_header != null)
        scrollY >= window.innerHeight? mutable_header.classList.add("sw-color-on-scroll") : mutable_header.classList.remove("sw-color-on-scroll")
}