const navbar= document.querySelector('.navbar');

document.querySelector('#menu').onclick=()=>{
    navbar.classList.toggle('active');
    cartitem.classList.remove('active');
    search.classList.remove('active');
};

const cartitem= document.querySelector('.cart-items-container');

document.querySelector('#cart').onclick=()=>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
};

const search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}
