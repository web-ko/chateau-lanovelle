$('.btn-click').click(function(){
var $helper = $('.toggled-content');
$helper.animate({
            height: "toggle"
        }, {
        duration: 500,
        progress: function(){
            $helper.scrollTop( $helper[100].scrollHeight );       
        }
    });
});



function toggleOne(id,wid) {
       var e = document.getElementById(id);
        var f = document.getElementById(wid);
       if(e.style.display == 'block'){
          e.style.display = 'none';
		  f.style.display = 'block';
	   }
       else {
          e.style.display = 'block';
            f.style.display = 'none';
	   }
    }

