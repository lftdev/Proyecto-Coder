const html = document.querySelector('html')
const main_home_modal = document.querySelector('#main-home .div-modal')

document.querySelector('.btn-close-modal').addEventListener('click', on_click_btn_signup)
document.querySelector('#btn-signup').addEventListener('click', on_click_btn_signup)

function on_click_btn_signup() {
    main_home_modal.classList.toggle('set-closed')
    html.classList.toggle('on-modal-show')
}