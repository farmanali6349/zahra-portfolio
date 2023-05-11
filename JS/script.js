var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');

menu.style.right = '-350px';
menuIcon.addEventListener('click', showHide);

function showHide() {
    if(menu.style.right == '-350px') {
        menu.style.right = '-100px';
        menuIcon.style.top = '32px';
        menuIcon.style.right= '129px';
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        menuIcon.style.color = '#000';
    } else {
        menu.style.right = '-350px';
        menuIcon.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
        menuIcon.style.top = '50%';
        menuIcon.style.right = '20px';
        menuIcon.style.transform = 'translateY(-50%)';
        menuIcon.style.color = '#fff';
    }
}

