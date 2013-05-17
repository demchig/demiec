$(function() {
	
    $('#register').click(function() {
    	$.blockUI();
    	
		var formobj = $('#product-form').serialize();
    	
		$.ajax({
			type: "POST",
			url: "api/product_regist",
			data: formobj
		})
		.done(function(res) {
			alert(res);
		})
		.fail(function(res) {
			alert(res); 
		})
		.always(function(res) {
			$.unblockUI();
		});
	});
});
