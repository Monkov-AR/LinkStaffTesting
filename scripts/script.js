$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.list_nav_header').toggleClass('active');
        $('body').toggleClass('lock');
    });
});