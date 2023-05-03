const header = document.querySelector('header')
const nav_menu_header = document.querySelector('#nav-menu-header')
const header_social_nav = document.querySelector('header .social-nav')
const btn_menu_span = document.querySelectorAll('#btn-menu span')
document.querySelector('#btn-menu').addEventListener('click', on_click_menu)

const mutable_header = document.querySelector('header.mutable')
window.addEventListener('scroll', () => {
    sw_color_on_scroll(window.scrollY)
});

function on_click_menu() {
    header.classList.toggle('deployed')
    nav_menu_header.classList.toggle('set-closed')
    header_social_nav.classList.toggle('set-closed')
    btn_menu_span.forEach(span => {
        span.classList.toggle('deployed')
    })
}

function sw_color_on_scroll(scrollY) {
    if (mutable_header != null)
        scrollY >= window.innerHeight? mutable_header.classList.add('sw-color-on-scroll') : mutable_header.classList.remove('sw-color-on-scroll')
}