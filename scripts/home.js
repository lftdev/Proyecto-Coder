const btn_close_signup = document.querySelector("#btn-close-signup")
btn_close_signup.addEventListener("click", on_click_btn_signup)

const btn_signup = document.querySelector("#btn-signup")
btn_signup.addEventListener("click", on_click_btn_signup)

function on_click_btn_signup()
{
    signup_window.classList.toggle("set-hidden")
    document.querySelector("html").classList.toggle("on-modal-show")
}