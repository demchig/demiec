$(function() {
	
	$("div.mytab").hide();
	$("#tab-list-product").show();
	
	$(window).hashchange( function(){
		init_byhash();
	})
	
	
	function init_byhash(){
		var hash = location.hash;
		 
		//console.log(hash);
		 
		$('#li-side-bar li').each(function(){
			if( ! hash ){
				return;
			}
			var hash_ar = hash.replace( /^#/, '' ).split('/');
			var action = hash_ar[0];
			//console.log(hash_ar);
			
			$(this).removeClass('active');
			if( $(this).children('a').attr('href') == '#' + action ) {
				$(this).addClass('active');
			}
			
			$("div.mytab").hide();
			$('#tab-' + action).show();
		});
	}

	init_byhash();

// 	$('#li-side-bar a').click(function (e) {
// 		//e.preventDefault();
// 
// 		$('#li-side-bar li').removeClass('active');
// 		$(this).closest('li').addClass('active');
// 		
// 		$("div.mytab").hide();
// 
// 		var href = $(this).attr('href');
// 		$(href).show();
// 
// 	})

});
