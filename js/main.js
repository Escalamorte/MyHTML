$(document).ready(function(){
    $('.header').height($(window).height());
});
// language=JQuery-CSS
$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },5000)
});