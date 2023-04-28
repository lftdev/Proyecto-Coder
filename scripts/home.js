const btn_close_modal = document.querySelector(".btn-close-modal")
btn_close_modal.addEventListener("click", on_click_btn_signup)

const btn_signup = document.querySelector("#btn-signup")
btn_signup.addEventListener("click", on_click_btn_signup)

const signup_modal = document.querySelector("#main-home .div-modal")

function on_click_btn_signup() {
    signup_modal.classList.toggle("set-closed")
    document.querySelector("html").classList.toggle("on-modal-show")
}