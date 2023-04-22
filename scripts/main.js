const nav_menu_header = document.querySelector("#nav-menu-header")

const btn_menu = document.querySelector("#btn-menu")
btn_menu.addEventListener("click", on_click_menu)

const signup_window = document.querySelector("#div-signup-window")

window.addEventListener("scroll", () =>
{
    sw_color_on_scroll(window.scrollY)
});

function on_click_menu()
{
    nav_menu_header.classList.toggle("hide-on-screen-sm")
    for (let i = 1; i <= 3; i++)
        document.querySelector(".btn-menu-bar" + i).classList.toggle("animated-bar" + i)
}

function sw_color_on_scroll(scrollY)
{
    let mutable_header = document.querySelector("header.mutable")
    if (mutable_header != null)
        scrollY >= window.innerHeight? mutable_header.classList.add("sw-color-on-scroll") : mutable_header.classList.remove("sw-color-on-scroll")
}