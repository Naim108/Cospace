/* preloader js */
$(window).on('load',function(){
   $('#preloader').delay(1000).fadeOut(1000);
});
 /* form js */
 $(document).ready(function(){
   $(".submit-btn").click(function(){
    alert("Your booking Confirm.Thank you for Chossing.")
   });
   $(".newsletter__btn").click(function(){
      $(".successfully").show();
   })
 })