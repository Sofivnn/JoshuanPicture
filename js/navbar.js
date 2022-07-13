// var isActive = false;

// $('.menu').on('click', function (){
//   if (isActive){
//     $(this).removeClass('active');
//     $('body').removeClass('menu-open');
//   }else{
//     $(this).addClass('active');
//     $('body').addClass('menu-open');
//   }
//   isActive = !isActive;
// });



const menu = document.querySelector('.menu');
var isActive = false;
menu.addEventListener('click', function onClick() {
    if (isActive){
        menu.classList.remove('active')
        document.body.classList.remove("menu-open")
    }else{
        menu.classList.add('active')
        document.body.classList.add("menu-open")
    }
    isActive=!isActive


});