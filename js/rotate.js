// $(".dropdown-div").click(function() {
//   $(".toggle-button").toggleClass("rot");
// });




// Button Ripple Effect
$(function(){

  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY){
    this.width = ( width <= height ) ? height : width;
    this.height = ( width <= height ) ? height : width;
    this.top = posY - (this.height * 0.5);
    this.left = posX - (this.width * 0.5);
  }

  $('.ripple-authen, .dropdownRipple, .top-ripple, .btn-ripple').on('mousedown', function(e){
    //appending an element with a class name "ripple-authen-ripple"
    var rippleEl = $('<span class="ripple-authen-ripple"></span>').appendTo(this);

    //getting the button's offset position
    var pos = $(this).offset();

    //get the button's width and height
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    //get the cursor's x and y position within the button
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    //adding a css style to the ripple effect
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });

  //this event listener will be triggered once the ripple animation is done
  $('.ripple-authen, .dropdownRipple, .top-ripple, .btn-ripple').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.ripple-authen-ripple', function(){
    $(this).remove();
  });
});
// end of Button Ripple Effect

// Multiple languages using Jquery
var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['geo'] = new Array();

    // English content
    arrLang['en']['Product Authentication'] = 'Product Authentication';
    arrLang['en']['Language'] = 'Language';
    arrLang['en']['PLEASE ENTER ID'] = 'PLEASE ENTER ID';
    arrLang['en']['1 Scan or Enter Id'] = '1 Scan or Enter Id';
    arrLang['en']['2 Confirm'] = '2 Confirm';
    arrLang['en']['3 Be Sure'] = '3 Be Sure';
    arrLang['en']['Step 1:'] = 'Step 1:';
    arrLang['en']['Enter ID from your Security Label'] = 'Enter ID from your Security Label';
    arrLang['en']['Step 2:'] = 'Step 2:';
    arrLang['en']['Press the Check Button'] = 'Press the Check Button';
    arrLang['en']['OK'] = 'OK';
    arrLang['en']['ENTER ID'] = 'ENTER ID';
    arrLang['en']['CHECK'] = 'CHECK';
    arrLang['en']['© 2020 Château Lanovelle'] = '© 2020 Château Lanovelle';
    arrLang['en']['Legal Notice'] = 'Legal Notice';
    arrLang['en']['Privacy Policy'] = 'Privacy Policy';

    // Khmer content (Cambodian Language)
    // Please change to your own language
    arrLang['geo']['Product Authentication'] = 'პროდუქტის იდენტიფიკაცია';
    arrLang['geo']['Language'] = 'ენა';
    arrLang['geo']['PLEASE ENTER ID'] = 'შეიყვანეთ ID';
    arrLang['geo']['1 Scan or Enter Id'] = '1 სკანირება ან Id-ის შეყვანა';
    arrLang['geo']['2 Confirm'] = '2 დადასტურება';
    arrLang['geo']['3 Be Sure'] = '3 დარწმუნება';
    arrLang['geo']['Step 1:'] = '1 ნაბიჯი:';
    arrLang['geo']['Enter ID from your Security Label'] = 'შეიყვანეთ ID თქვენი დაცული გრაფიდან';
    arrLang['geo']['Step 2:'] = '2 ნაბიჯი:';
    arrLang['geo']['Press the Check Button'] = 'დააჭირეთ ჩეკ ღილაკს';
    arrLang['geo']['OK'] = 'ოკ';
    arrLang['geo']['ENTER ID'] = 'შეიყვანეთ ID';
    arrLang['geo']['CHECK'] = 'ჩეკი';
    arrLang['geo']['© 2020 Château Lanovelle'] = '© 2020 შატო ლანოველი';
    arrLang['geo']['Legal Notice'] = 'ლეგალური უწყება';
    arrLang['geo']['Privacy Policy'] = 'მონაცემთა დაცვა';

    // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang1').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });
    // end of Multiple languages using Jquery

// Multiple languages, change font-family
$("#geo").click(function() {
  $(".lang1").addClass("change-lang");
  $(".entr-id").addClass("change-lang1");
  $(".rect-1").addClass("change-lang2");
  $(".rect-2").addClass("change-lang3");
  $(".modal-title").addClass("change-lang4");
  $(".modal-title-p").addClass("change-lang5");
  $(".btn-ok").addClass("change-lang6");
  $(".labelId").addClass("change-lang7");
  $(".btn-round").addClass("change-lang8");
});
$("#en").click(function() {
  $(".lang1").removeClass("change-lang");
  $(".entr-id").removeClass("change-lang1");
  $(".rect-1").removeClass("change-lang2");
  $(".rect-2").removeClass("change-lang3");
  $(".modal-title").removeClass("change-lang4");
  $(".modal-title-p").removeClass("change-lang5");
  $(".btn-ok").removeClass("change-lang6");
  $(".labelId").removeClass("change-lang7");
  $(".btn-round").removeClass("change-lang8");
});
// end of Multiple languages, change font-family