
/* Loading screen */
$(window).on('load', function () {

  $('.loading-overlay .sk-folding-cube').fadeOut(2000,function (){
    $('body').css("overflow","auto");
    $(this).parent().fadeOut(2000,function (){
     
      $(this).remove();
    })
  });

 });


$(function () {
   'use strict' ;
   
   // Adjust slider height
   var windowHeight=$(window).height(),
       upperNavHeight= $('.upper-bar').innerHeight(),
       navbarHeight=$('.navbar').innerHeight();
      
      
     $('.background-header').height(windowHeight-(upperNavHeight+navbarHeight));



    // typed 
    var typed = new Typed('#typed', {
      strings: ["Full stack developer"],
      typeSpeed: 40,
      backSpeed: 0,
      loop: true
    });

    var typed2 = new Typed('#typed2', {
      strings: [' I am a yemen based full stack developer focused on crafting clean $ user firendly experiences . I am passionate about building excellent software that improves the lives of thase around me . '] ,
      typeSpeed: 40,
      backSpeed: 0,
      //loop: true
    });
    
    // add active class
    /*$(".nav-item").click(function() { 
              
      // Select all list items 
      var listItems = $(".nav-item"); 
        
      // Remove 'active' tag for all list items 
      for (let i = 0; i < listItems.length; i++) { 
          listItems[i].classList.remove("active"); 
      } 

      // Add 'active' tag for currently selected item 
      this.classList.add("active"); 
  }); 
  */

   //Scroll Top
   var scroll=$("#scroll-top");
   $(window).scroll(function (){
     console.log($(this).scrollTop());
     $(this).scrollTop() >=1020 ? scroll.show():scroll.hide();
   });

   scroll.click(function ()
   {
     $('html,body').animate({scrollTop:0},2000)
   });


   $('a#home').click(function (){
    $('html, body').animate({
      scrollTop: $("div#home").offset().top
    },1000)
  })

  $('a#aboutme').click(function (){
    $('html, body').animate({
      scrollTop: $("div#aboutme").offset().top
    },1000)
  })

  $('a#aboutme').click(function (){
    $('html, body').animate({
      scrollTop: $("div#aboutme").offset().top
    },1000)
  })

  $('a#skills').click(function (){
    $('html, body').animate({
      scrollTop: $("div#skills").offset().top
    },1000)
  })

  $('a#service').click(function (){
    $('html, body').animate({
      scrollTop: $("div#service").offset().top
    },1000)
  })

  $('a#work').click(function (){
    $('html, body').animate({
      scrollTop: $("div#work").offset().top
    },1000)
  })


  $('a#contact').click(function (){
    $('html, body').animate({
      scrollTop: $("div#contact").offset().top
    },1000)
  })


  
  

  }); 






