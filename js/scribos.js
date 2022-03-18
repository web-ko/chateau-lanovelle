// const responsiveNavbar = (function () {
// 	const button = document.querySelector("#menuButton");
// 	const navbar = document.querySelector("#navbar")
// 	button.addEventListener("click", function () {
// 		if (navbar.className === "navbar") {
// 			navbar.className += " navbarResponsive";
// 		}
// 		else {
// 			navbar.className = "navbar";
// 		}
// 	});
// })();

// if (document.getElementById('hearderSlide')) {
// 	$('#hearderSlide').multislider();
// 	$('#hearderSlide').multislider('pause');
// }


function closeCart() {
	const cart = document.querySelector('.burger-content');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.burger-button');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.burger-content');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
// const closeShopCart1 = document.querySelector('#closeButton1'); ჩემი დამატებული
const closeShopCart1 = document.querySelector('#closeButton1');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
// closeShopCart1.addEventListener('click', closeCart); ჩემი დამატებული
closeShopCart1.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);



// ეს, როცა კალათა მინდა თანაბრად გაიხსნას და დაიკეტოს
$(".burger-button").click(function() {
	$(".overlay").toggleClass("open");
});

$("#closeButton").click(function() {
	$(".overlay").removeClass("open");
});

$(".overlay").click(function() {
	$(".overlay").removeClass("open");
});

$("#closeButton1").click(function() {
	$(".overlay").removeClass("open");
});
// end of ეს, როცა კალათა მინდა თანაბრად გაიხსნას და დაიკეტოს


// dropdown
    $('.dropdown').on('show.bs.dropdown', function(e){
    	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});

// $(".dropdown > .dropdown-div").click(function(){
// 	$(this).parent().siblings().find("ul").slideDown(200);
// 	$(this).next("ul").stop(true, false, true).slideToggle(200);
// 	return false;
// });


// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropdown-div')) {
//     var dropdowns = document.getElementsByClassName("dropdown-menu");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

fadeOut
fadeToggle


