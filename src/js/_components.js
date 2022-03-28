// tabs
$('.questions__tab-title').click(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});

//input-tel
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "ru",
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.querySelector('#phone').addEventListener('input', 
    function(e){
    this.value = this.value.replace(/[^\d.]/g, '');
    }
)
//burger 
$('.burger').click(function(){
    $(this).toggleClass("active");
    $('.header__nav').toggleClass("active");
    $('.grey-back').toggleClass("active");
    $('body').toggleClass("hidden");
});

//nav-mob
$('.nav__elem').click(function(){
    $('.burger').removeClass("active");
    $('.header__nav').removeClass("active");
    $('.grey-back').removeClass("active");
    $('body').removeClass("hidden");
});
