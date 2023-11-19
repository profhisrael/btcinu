const main = () => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
        
    //INSERT EVENT DATE AND TIME HERE IN THIS FORMAT: 'June 1, 2023, 19:00:00'
    const EVENTDATE = new Date('December 25, 2023, 19:00:00')
   
    const countDown = new Date(EVENTDATE).getTime()
    const x = setInterval(() => {
  
          const now = new Date().getTime()
          const distance = countDown - now
  
          document.getElementById("days").innerText = Math.floor(distance / day)
          document.getElementById("hours").innerText =  Math.floor((distance % day) / (hour))
          document.getElementById("minutes").innerText =   Math.floor((distance % hour) / (minute))
          document.getElementById("seconds").innerText =    Math.floor((distance % minute) / second)
  
        //delay in milliseconds
        }, 0)
    }
  
  main();


$(document).ready(function(){


    $(".monekey_button button").on('click',function(){
        $(".monekey_button button").removeClass('active');
        $(this).addClass('active');
        var attr_id = $(this).attr('id'); 
        $('.monkey_form').hide();
        $('.'+attr_id).show();

        return false;

    }); 





}); 

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
        $(this).closest('.card').css({'border-radius':'0 !important','background':'linear-gradient(135deg, #F2B253 0%, #E0724A 53.25%, #E56756 100%)'}); 
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus"); 
        $(this).closest('.card').css({'border-radius':'10px !important','background':'#252733'}); 
    });
 
    // $('.show_colups').closest('.card').css({'border-radius':'0 !important','background':'linear-gradient(135deg, #F2B253 0%, #E0724A 53.25%, #E56756 100%)'}); 


});



$(document).ready(function(){
  // $('.accordion-head.active').click();


  $('.menu ul li a,.monkey_footer a,.header_btn  a, .tokenomics_scroll').click(function(){

    $('html,body').animate({
      scrollTop:$($(this).attr('href')).offset().top
    },1000);

    return false;
  });


});

$(document).on('click','.bars_menu',function(){
  $('.menu').slideToggle();
}); 

AOS.init();