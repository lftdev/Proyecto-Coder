const nav_menu_header = document.getElementById("nav-menu-header")

const btn_menu = document.querySelector("#btn-menu")
btn_menu.addEventListener("click", on_click_menu)

const signup_window = document.querySelector("#div-signup-window")

const btn_close_signup = document.querySelector("#btn-close-signup")
btn_close_signup.addEventListener("click", on_click_btn_signup)

const btn_signup = document.querySelector("#btn-signup")
btn_signup.addEventListener("click", on_click_btn_signup)

window.addEventListener("scroll", () =>
{
    obfuscate_header(window.scrollY)
});

function on_click_menu()
{
    nav_menu_header.classList.toggle("set-hidden")
    for (let i = 1; i <= 3; i++)
        document.querySelector(".btn-menu-bar" + i).classList.toggle("animated-bar" + i)
}

function on_click_btn_signup()
{
    signup_window.classList.toggle("set-hidden")
    document.querySelector("html").classList.toggle("show-modal")
}

function obfuscate_header(scrollY)
{
    if (scrollY >= 300)
        document.querySelector("header").classList.add("obfuscate")
    else
        document.querySelector("header").classList.remove("obfuscate")
}