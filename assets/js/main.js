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

// Hero form dropdown select
var $inputDropdown = document.querySelector('.input-dropdown');
var $selectWrap = document.querySelector('.select-wrap');
var $selectOptions = document.querySelector('.select-options');

$inputDropdown.addEventListener('click', function(e) {
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
$('.datepicker-here').datepicker({
    autoClose: true,
    minDate: new Date()
})