/* preloader js */
$(window).on('load',function(){
   $('#preloader').delay(1000).fadeOut(1000);
});


/* !navbar script */
let openBtn=document.querySelector('.bi-list')
let closeBtn=document.querySelector('.bi-x-lg')
let menu=document.querySelector('.navbar__menu')

openBtn.addEventListener('click',()=>{
   openBtn.classList.toggle("hide")
   closeBtn.classList.toggle("hide")
   menu.classList.toggle("hidden")
})
closeBtn.addEventListener('click',()=>{
    openBtn.classList.toggle("hide")
    closeBtn.classList.toggle("hide")
    menu.classList.toggle("hidden")
 })

 /* form js */
 $(document).ready(function(){
   $(".submit-btn").click(function(){
    alert("Your booking Confirm.Thank you for Chossing.")
   });
   $(".newsletter__btn").click(function(){
      $(".successfully").show();
   })
 })