    $(".bookTour").click(function(){
        $(".visitbox-0").slideToggle("fast");
    });

    $(".bookTour-1").click(function(){
        $(".visitbox-1").slideToggle("fast");
    });
    $(".bookTour-2").click(function(){
        $(".visitbox-2").slideToggle("fast");
    });

    $('input.forClick').on('change', function() {
        $('input.forClick').not(this).prop('checked', false);
    });



    var elem = document.getElementById("element");
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }

    function closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }


    /* Is currently in full screen or not */
function IsFullScreenCurrently() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
    
    // If no element is in full-screen
    if(full_screen_element === null)
        return false;
    else
        return true;
}



    $(".fullscreenButton").click(function(){
        $("iframe").toggleClass("iframefull");
        $(".fullscreenButton").hide();
        $(".fullscreenButtonCl").show();
    });

    $(".fullscreenButtonCl").click(function(){
        $("iframe").toggleClass("iframefull");
        $(".fullscreenButtonCl").hide();
        $(".fullscreenButton").show();
    });


  $(".home").click(function(){
    $(".home-slide").slideToggle("fast");
    $(".menu-h-home").toggleClass("home-intro");
    $(".about-slide").slideUp("");
    $(".history-slide").slideUp("");
    $(".vineyards-slide").slideUp("");
    $(".galery-slide").slideUp("");
    $(".gvino-slide").slideUp("");
    $(".studio-slide").slideUp("");
    $(".contacti-slide").slideUp("");
    $(".menu-h-about").removeClass("about-intro");
    $(".menu-h-history").removeClass("history-intro");
    $(".menu-h-vineyards").removeClass("vineyards-intro");
    $(".menu-h-galery").removeClass("galery-intro");
    $(".menu-h-gvino").removeClass("gvino-intro");
    $(".menu-h-studio").removeClass("studio-intro");
    $(".menu-h-contacti").removeClass("contacti-intro");
  });


  $(".about").click(function(){
    $(".about-slide").slideToggle("fast");
    $(".menu-h-about").toggleClass("about-intro");
    $(".home-slide").slideUp("");
    $(".history-slide").slideUp("");
    $(".vineyards-slide").slideUp("");
    $(".galery-slide").slideUp("");
    $(".gvino-slide").slideUp("");
    $(".studio-slide").slideUp("");
    $(".contacti-slide").slideUp("");
    $(".menu-h-home").removeClass("home-intro");
    $(".menu-h-history").removeClass("history-intro");
    $(".menu-h-vineyards").removeClass("vineyards-intro");
    $(".menu-h-galery").removeClass("galery-intro");
    $(".menu-h-gvino").removeClass("gvino-intro");
    $(".menu-h-studio").removeClass("studio-intro");
    $(".menu-h-contacti").removeClass("contacti-intro");
  });


   $(".history").click(function(){
    $(".history-slide").slideToggle("fast");
    $(".menu-h-history").toggleClass("history-intro");
    $(".home-slide").slideUp("");
    $(".about-slide").slideUp("");
    $(".vineyards-slide").slideUp("");
    $(".galery-slide").slideUp("");
    $(".gvino-slide").slideUp("");
    $(".studio-slide").slideUp("");
    $(".contacti-slide").slideUp("");
    $(".menu-h-home").removeClass("home-intro");
    $(".menu-h-about").removeClass("about-intro");
    $(".menu-h-vineyards").removeClass("vineyards-intro");
    $(".menu-h-galery").removeClass("galery-intro");
    $(".menu-h-gvino").removeClass("gvino-intro");
    $(".menu-h-studio").removeClass("studio-intro");
    $(".menu-h-contacti").removeClass("contacti-intro");
  });


   $(".vineyards").click(function(){
    $(".vineyards-slide").slideToggle("fast");
    $(".menu-h-vineyards").toggleClass("vineyards-intro");
    $(".home-slide").slideUp("");
    $(".about-slide").slideUp("");
    $(".history-slide").slideUp("");
    $(".galery-slide").slideUp("");
    $(".gvino-slide").slideUp("");
    $(".studio-slide").slideUp("");
    $(".contacti-slide").slideUp("");
    $(".menu-h-home").removeClass("home-intro");
    $(".menu-h-about").removeClass("about-intro");
    $(".menu-h-history").removeClass("history-intro");
    $(".menu-h-galery").removeClass("galery-intro");
    $(".menu-h-gvino").removeClass("gvino-intro");
    $(".menu-h-studio").removeClass("studio-intro");
    $(".menu-h-contacti").removeClass("contacti-intro");
  });


   $(".galery").click(function(){
    $(".galery-slide").slideToggle("fast");
    $(".menu-h-galery").toggleClass("galery-intro");
    $(".home-slide").slideUp("");
    $(".about-slide").slideUp("");
    $(".history-slide").slideUp("");
    $(".vineyards-slide").slideUp("");
    $(".gvino-slide").slideUp("");
    $(".studio-slide").slideUp("");
    $(".contacti-slide").slideUp("");
    $(".menu-h-home").removeClass("home-intro");
    $(".menu-h-about").removeClass("about-intro");
    $(".menu-h-history").removeClass("history-intro");
    $(".menu-h-vineyards").removeClass("vineyards-intro");
    $(".menu-h-gvino").removeClass("gvino-intro");
    $(".menu-h-studio").removeClass("studio-intro");
    $(".menu-h-contacti").removeClass("contacti-intro");
  });


   $(".gvino").click(function(){
    $(".gvino-slide").slideToggle("fast");
    $(".menu-h-gvino").toggleClass("gvino-intro");
    $(".home-slide").slideUp("");
    $(".about-slide").slideUp("");
    $(".history-slide").slideUp("");
    $(".vineyards-slide").slideUp("");
    $(".galery-slide").slideUp("");
    $(".studio-slide").slideUp("");
    $(".contacti-slide").slideUp("");
    $(".menu-h-home").removeClass("home-intro");
    $(".menu-h-about").removeClass("about-intro");
    $(".menu-h-history").removeClass("history-intro");
    $(".menu-h-vineyards").removeClass("vineyards-intro");
    $(".menu-h-galery").removeClass("galery-intro");
    $(".menu-h-studio").removeClass("studio-intro");
    $(".menu-h-contacti").removeClass("contacti-intro");
  });


   $(".studio").click(function(){
    $(".studio-slide").slideToggle("fast");
    $(".menu-h-studio").toggleClass("studio-intro");
    $(".home-slide").slideUp("");
    $(".about-slide").slideUp("");
    $(".history-slide").slideUp("");
    $(".vineyards-slide").slideUp("");
    $(".galery-slide").slideUp("");
    $(".gvino-slide").slideUp("");
    $(".contacti-slide").slideUp("");
    $(".menu-h-home").removeClass("home-intro");
    $(".menu-h-about").removeClass("about-intro");
    $(".menu-h-history").removeClass("history-intro");
    $(".menu-h-vineyards").removeClass("vineyards-intro");
    $(".menu-h-galery").removeClass("galery-intro");
    $(".menu-h-gvino").removeClass("gvino-intro");
    $(".menu-h-contacti").removeClass("contacti-intro");
  });


   $(".contacti").click(function(){
    $(".contacti-slide").slideToggle("fast");
    $(".menu-h-contacti").toggleClass("contacti-intro");
    $(".home-slide").slideUp("");
    $(".about-slide").slideUp("");
    $(".history-slide").slideUp("");
    $(".vineyards-slide").slideUp("");
    $(".galery-slide").slideUp("");
    $(".gvino-slide").slideUp("");
    $(".studio-slide").slideUp("");
    $(".menu-h-home").removeClass("home-intro");
    $(".menu-h-about").removeClass("about-intro");
    $(".menu-h-history").removeClass("history-intro");
    $(".menu-h-vineyards").removeClass("vineyards-intro");
    $(".menu-h-galery").removeClass("galery-intro");
    $(".menu-h-gvino").removeClass("gvino-intro");
    $(".menu-h-studio").removeClass("studio-intro");
  });



  $(".og-close").click(function(){
    $(".home-slide").slideUp("fast");
    $(".about-slide").slideUp("fast");
    $(".history-slide").slideUp("fast");
    $(".vineyards-slide").slideUp("fast");
    $(".galery-slide").slideUp("fast");
    $(".gvino-slide").slideUp("fast");
    $(".studio-slide").slideUp("fast");
    $(".contacti-slide").slideUp("fast");
    $(".menu-h-home").removeClass("home-intro");
    $(".menu-h-about").removeClass("about-intro");
    $(".menu-h-history").removeClass("history-intro");
    $(".menu-h-vineyards").removeClass("vineyards-intro");
    $(".menu-h-galery").removeClass("galery-intro");
    $(".menu-h-gvino").removeClass("gvino-intro");
    $(".menu-h-studio").removeClass("studio-intro");
    $(".menu-h-contacti").removeClass("contacti-intro");
  });

