// Click transfer date
if (document.querySelectorAll('.services__wrap__block .btn-primary-l') !== null) {
    document.querySelectorAll('.services__wrap__block .btn-primary-l').forEach(function(item) {
        item.addEventListener('click', function() {
            var headTert = this.closest('.services__wrap__block').querySelector('.heading-tertiary').textContent;
    
            document.querySelector('.popup-content .data-primary').textContent = headTert;
            document.querySelector('.popup-content .data-primary').classList.add('active');
        })    
    })
}

if (document.querySelectorAll('.offers__wrap .btn-primary') !== null) {
    document.querySelectorAll('.offers__wrap .btn-primary').forEach(function(item) {
        item.addEventListener('click', function() {
            var offerHeadTariff = this.closest('.offers__wrap__block').querySelector('.heading-secondary').textContent;
            var offerHeadPrice = this.closest('.offers__wrap__block').querySelector('.heading-primary').textContent;
            var offerHeadPeriod = this.closest('.offers__wrap__block').querySelector('.heading-tertiary').textContent;
        
            document.querySelector('.popup-content .data-primary').textContent = offerHeadTariff + ' ' + offerHeadPrice + ' ' + offerHeadPeriod;
            document.querySelector('.popup-content .data-primary').classList.add('active');
        })
    })
}

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
document.querySelectorAll('.nav-mobile__list .dropdown').forEach(function(item) {
    item.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
    })

    item.addEventListener('click', function() {
        this.querySelector('.nav-mobile__list--sub-menu').classList.toggle('active');
    })
})

// if (document.querySelector('.header__inner__nav .dropdown').querySelector('a').nextElementSibling.className === 'header__inner__nav--sub-menu') {
//     document.querySelector('.header__inner__nav .dropdown').querySelector('a').addEventListener('click', function(e) {
//         e.preventDefault();
//     })
// }

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