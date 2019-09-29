// Popup
document.querySelectorAll('.popup-opener')
.forEach(btn => {
    btn.addEventListener('click', function() {
        
        var $popup = document.querySelector('#' + btn.dataset.popup);

        $popup.hidden = false;
    })
});

document.querySelectorAll('.popup-wrapper')
.forEach($wrap => {
    $wrap.addEventListener('click', () => {
        $wrap.hidden = true;
    });

    var $popup = $wrap.querySelector('#popup');
    
    $popup.addEventListener('click', e => {
        e.stopPropagation();
    });

    var $close = $popup
        .querySelector('.close');

    if (!$close) {
        return;
    }

    $close.addEventListener('click', e => {
        $close.closest('.popup-wrapper').hidden = true;
    })
});

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
var $navMobile = document.querySelector('.nav-mobile');

$hamburger.addEventListener('click', function() {
    $navMobile.classList.toggle('active');
    $header.classList.toggle('active');
    this.classList.toggle('is-active');
})

// Sub-menu
document.querySelector('.nav-mobile__list .dropdown').addEventListener('click', function() {
    this.querySelector('.nav-mobile__list--sub-menu').classList.toggle('active');
})

if (document.querySelector('.nav-mobile__list .dropdown').querySelector('a').nextElementSibling.className === 'nav-mobile__list--sub-menu') {
    document.querySelector('.nav-mobile__list .dropdown').querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
    })
}

if (document.querySelector('.header__inner__nav .dropdown').querySelector('a').nextElementSibling.className === 'header__inner__nav--sub-menu') {
    document.querySelector('.header__inner__nav .dropdown').querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
    })
}

// Calendar
if (document.querySelector('.datepicker-here') !== null) {
    if (window.innerWidth > 901) {
        document.querySelector('.datepicker-here').setAttribute('data-position', 'right center');
    }
    if (window.innerWidth < 900) {
        document.querySelector('.datepicker-here').setAttribute('data-position', 'bottom center');
    }
}

$('.datepicker-here').datepicker({
    autoClose: true,
    minDate: new Date()
})

// Select
$('#select-custom').selectize({
    create: true,
    sortField: {
        field: 'text',
        direction: 'asc'
    },
    dropdownParent: 'body'
});

// Animation
new WOW().init();