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

// Hero form dropdown
document.querySelector('.form-dropdown').addEventListener('click', function() {
    document.querySelector('.select-options').classList.add('active');
})

$('.datepicker-here').datepicker({
    autoClose: true,
    minDate: new Date()
})