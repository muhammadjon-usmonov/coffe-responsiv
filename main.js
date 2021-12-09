const elHamburger = document.querySelector('.header__button')
const elHeader=document.querySelector('.header')

elHamburger.addEventListener('click', () =>{
    elHeader.classList.toggle('header--active')
})