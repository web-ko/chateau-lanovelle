function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);



$(".shoppingCartButton").click(function() {
	$(".overlay").toggleClass("open");
});

$("#closeButton").click(function() {
	$(".overlay").removeClass("open");
});

$(".overlay").click(function() {
	$(".overlay").removeClass("open");
});