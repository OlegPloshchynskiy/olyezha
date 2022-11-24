$(document).ready(function(){
    let flag = false;
    $('.burger').click(function(){
        if(!flag) {
            $('.header-menu').fadeIn();
            $('.header-menu').css('display', 'flex');
            $('.burger').css('zIndex', '30')
            $('.line').css('position', 'absolute')
            $('.first').css('transform', 'rotate(45deg)')
            $('.second').css('transform', 'rotate(-45deg)')
        }else{
            $('.header-menu').fadeOut();
            $('.line').css('position', 'static')
            $('.first').css('transform', 'rotate(0)')
            $('.second').css('transform', 'rotate(0)')
        }
        flag = !flag
    })
}) 