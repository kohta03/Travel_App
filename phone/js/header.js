function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('touchstart', function() {
        body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('touchstart', function() {
        body.classList.remove('nav-open');
    });
}
toggleNav();