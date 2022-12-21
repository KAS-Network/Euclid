const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
      btn.classList.remove('tabs-nav__btn_active')
    })
    e.currentTarget.classList.add('tabs-nav__btn_active')
    document.querySelectorAll('.tabs-item').forEach(function(tabsItem) {
      tabsItem.classList.remove('tabs-item_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item_active')
  })
})

const menu = document.querySelector("#burger");
const openBtn = document.querySelector("#open-btn")
openBtn.addEventListener("click", function(){
  openBtn.ariaHidden="true"
  menu.ariaHidden="false"
  menu.classList.add("burger_active");
  document.querySelector("#open-btn").tabIndex="-1";
  document.querySelector("#close-btn").tabIndex="0";
  document.querySelectorAll(".burger__link").forEach(function(element){
    element.tabIndex="0";
  })
  document.querySelector("#close-btn").focus();
})
document.querySelector("#close-btn").addEventListener("click", function(){
  openBtn.ariaHidden="false"
  menu.ariaHidden="true"
  menu.classList.remove("burger_active");
  document.querySelector("#open-btn").tabIndex="0";
  document.querySelector("#close-btn").tabIndex="-1";
  document.querySelectorAll(".burger__link").forEach(function(element){
    element.tabIndex="-1";
  })
  openBtn.focus();
})

const searchField = document.querySelector(".search-field");
const searchInput = document.querySelector(".search-form__input");
document.querySelector(".header__search-btn").addEventListener("click", function(){
  searchField.ariaHidden="false"
  searchField.classList.add("search-field_active");
  setTimeout(function(){
    searchInput.classList.add("search-form__input_active");
  }, 500)
  searchInput.tabIndex="0";
  document.querySelector(".search-form__btn").tabIndex="0";
  document.querySelector(".search-field__close-btn").tabIndex="0";
  searchInput.focus();
})
document.querySelector(".search-field__close-btn").addEventListener("click", function(){
  searchField.ariaHidden="true"
  searchInput.classList.remove("search-form__input_active");
  setTimeout(function(){
    searchField.classList.remove("search-field_active");
  }, 500)
  searchInput.tabIndex="-1";
  document.querySelector(".search-form__btn").tabIndex="-1";
  document.querySelector(".search-field__close-btn").tabIndex="-1";
  document.querySelector(".header__search-btn").focus();
})

window.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll(".accordion__item").forEach(function(accordionItem){
    const question = accordionItem.querySelector(".question");
    question.tabIndex="-1";
    accordionItem.addEventListener("keyup", function(keyup){
      if(keyup.code=="Enter"){
        question.click();
        question.tabIndex="-1";
      }
    })
  })
})

// const checkbox = document.querySelector(".form__checkbox");
// checkbox.addEventListener("keyup", function(keyup){
//   if(keyup.code=="Enter"){
//     checkbox.checked ? checkbox.checked = false : checkbox.checked = true;
//   }
// })
