$(function() {
	
	var products = $('#tbody-product-list').data('products');
	
	if( ! products ){
		// get and render products
		reload();
	}
	
	
	function reload(){
    	$.blockUI();
    	
		$.ajax({
			url: "api/product_list",
			data: {}
		})
		.done(function(res) {
			//alert("Done");
			//$('#tbody-product-list').append($(res));

			console.log(res);

			$('#tbody-product-list').data('products', res);
		})
		.fail(function(res) {
			alert("Failed"); 
		})
		.always(function(res) {
			$.unblockUI();
		});
	}
	
	
    $('#reload').click(function() {
    	$('#tbody-product-list').empty();
    	reload();
	});
	
});
