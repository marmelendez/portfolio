const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.getElementById('menu-links');
const header = document.getElementById('title');

let menuOpen = false;

window.addEventListener("resize", function(){
    let width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > "768") {
        console.log(width);
        menuLinks.classList.remove('menu-btn-links-general');
        menuLinks.classList.remove('hide');
        menuLinks.classList.remove('show');
        menuBtn.before(menuLinks);
    } 
}, true);

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open'); //show
        menuLinks.classList.add('menu-btn-links-general')
        menuLinks.classList.remove('hide');
        menuLinks.classList.add('show')
        header.before(menuLinks);
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuLinks.classList.remove('menu-btn-links-general')
        menuLinks.classList.add('hide')
        menuOpen = false;
    }
})