const mobileMenu = document.getElementById('mobile-menu');

document.getElementById('hamburger').addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu-content').forEach(element => element.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
}));


const privacyPopup = document.getElementById('privacy-popup');

document.getElementById('close-privacy').addEventListener('click', function() {
    privacyPopup.style.display = 'none';
});

function showPrivacyPopup() {
    privacyPopup.style.display = 'block';
}