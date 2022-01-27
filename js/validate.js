// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
	 form.addEventListener('submit', function (event) {
	 	if (!form.checkValidity()) {
	 		event.preventDefault()
	 		event.stopPropagation()
	 	}

		form.classList.add('was-validated')
		}, false)
	})
})()


let $jqDate = $('.date-slashes');

$jqDate.bind('keyup', function(ev) {
  if (ev.which !== 8) {
    let input = $jqDate.val();
    let out = input.replace(/\D/g, '');
    let len = out.length;

    if (len > 1 && len < 4) {
      out = out.substring(0, 2) + ' / ' + out.substring(2, 3);
    } else if (len >= 4) {
      out = out.substring(0, 2) + ' / ' + out.substring(2, 4);
    }
    $jqDate.val(out)
  }
});




 function isInputNumber(evt){
 	var ch = String.fromCharCode(evt.which);
 	if(!(/[0-9]/.test(ch))){
 		evt.preventDefault();
 	}
 }


function isInputLetter(evt){
  var ch = String.fromCharCode(evt.which);
  if(!(/[ა-ჰ-а-я-A-z\s]/.test(ch))){
    evt.preventDefault();
  }
 }



   function leadingZeros(input) {
    if(!isNaN(input.value) && input.value.length === 1) {
      input.value = '0' + input.value;
    }
  }