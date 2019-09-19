// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', smoothScroll));

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");

    window.scrollTo({
        top: document.querySelector(targetId).offsetTop - 50,
        behavior: "smooth"
    });
}

// Nav mobile menu
var $header = document.querySelector('.header');
var $hamburger = document.querySelector('.btn-hamburger');
var $hamburgerClose = document.querySelector('.btn-hamburger-close');
var $navMobile = document.querySelector('.nav-mobile');

$hamburger.addEventListener('click', function() {
    $navMobile.classList.toggle('active');
    $header.classList.toggle('active');
    $hamburger.style.display = "none";
    $hamburgerClose.style.display = "flex";
})

$hamburgerClose.addEventListener('click', function() {
    $navMobile.classList.toggle('active');
    $header.classList.toggle('active');
    $hamburger.style.display = "flex";
    $hamburgerClose.style.display = "none";
})

// Hero form dropdown select
var $inputDropdown = document.querySelector('.input-dropdown');
var $selectWrap = document.querySelector('.select-wrap');
var $selectOptions = document.querySelector('.select-options');

$inputDropdown.addEventListener('click', function() {
    $selectOptions.classList.add('active');
    $selectWrap.classList.add('active');
});
$selectWrap.addEventListener('click', function() {
    $selectOptions.classList.remove('active');
    this.classList.remove('active');
});
$selectOptions.querySelectorAll('li').forEach(function(item) {
    item.addEventListener('click', function() {
        $inputDropdown.value = this.textContent;
        $selectOptions.classList.remove('active');
        $selectWrap.classList.remove('active');
    })
});

// Calendar
if (window.innerWidth > 601) {
    document.querySelector('.datepicker-here').setAttribute('data-position', 'right center');
}
if (window.innerWidth < 600) {
    document.querySelector('.datepicker-here').setAttribute('data-position', 'bottom center');
}

$('.datepicker-here').datepicker({
    autoClose: true,
    minDate: new Date()
})
