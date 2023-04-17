const nav_menu_header = document.querySelector("#nav-menu-header")

const btn_menu = document.querySelector(".btn-menu")
btn_menu.addEventListener("click", on_click_menu)

const signup_window = document.querySelector("#div-signup-window")

const btn_close_signup = document.querySelector("#btn-close-signup")
btn_close_signup.addEventListener("click", on_click_btn_signup)

const btn_signup = document.querySelector("#btn-signup")
btn_signup.addEventListener("click", on_click_btn_signup)

window.addEventListener("scroll", () =>
{
    sw_color_on_scroll(window.scrollY)
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
    document.querySelector("html").classList.toggle("on-modal-show")
}

function sw_color_on_scroll(scrollY)
{
    if (scrollY >= window.innerHeight)
        document.querySelector("header").classList.add("sw-color-on-scroll")
    else
        document.querySelector("header").classList.remove("sw-color-on-scroll")
}

/* alert(window.innerWidth) */