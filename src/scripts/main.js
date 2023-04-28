/* Navbar mobile functionaly */
$('.h-menu-btn').click((e) => {
    e.preventDefault;
    
    $('.navbar__overlay-menu').addClass('navbar__overlay-menu--active')
})
document.querySelectorAll('.navbar__overlay-menu__links__pill__link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault
        $('.navbar__overlay-menu').addClass('navbar__overlay-menu--return')
        $('.navbar__overlay-menu').removeClass('navbar__overlay-menu--active')
        setTimeout(() => {
            $('.navbar__overlay-menu').removeClass('navbar__overlay-menu--return')
        }, 900)
    })
})
/*  */