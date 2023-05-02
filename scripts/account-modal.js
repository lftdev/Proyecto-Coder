document.querySelector(".btn-close-modal").addEventListener("click", on_click_btn_signup)

document.querySelector("#btn-signup").addEventListener("click", on_click_btn_signup)

function on_click_btn_signup() {
    document.querySelector("#main-home .div-modal").classList.toggle("set-closed")
    document.querySelector("html").classList.toggle("on-modal-show")
}