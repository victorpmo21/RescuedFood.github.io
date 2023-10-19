let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.remove('active');
    guidesVip.classList.remove('active');
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    guidesVip.classList.remove('active');
}

let guidesVip = document.querySelector('.guides-vip-container');

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    guidesVip.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    guidesVip.classList.remove('active');
}
