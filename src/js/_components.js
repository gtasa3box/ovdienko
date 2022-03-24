// tabs
$('.questions__tab-title').click(function(){
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});