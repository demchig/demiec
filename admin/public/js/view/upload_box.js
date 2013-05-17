$(function() {
	
	
	function add_thumbnail(imgurl){

		var del_btn = $('<a href="#" name="delete-upload-file" class="btn btn-mini">Delete</a>')
							.click(function(){
										if( confirm("Are you sure?") ){
											$(this).parent().remove();
										}
								   });
		var li_obj = $('<li></li>').addClass('span2')
								.append(
										 $('<a class="thumbnail" ></a>').attr('href', imgurl)
										 	.append( $('<img alt="upload image" />').attr('src', imgurl) )
										)
								.append( $('<br />') )
								.append( $('<input type="hidden" name="images[]"/>').attr('value', imgurl) )
								.append( del_btn );
		li_obj.appendTo('#image-holder');
		
    	// color b
    	$("#image-holder a.thumbnail").colorbox({rel:'upload images'})
	}

    $('#file1').change(function() {
    	$.blockUI();
    	
        $(this).upload('api/uploader', function(res) {
	    	$.unblockUI();
	    	
	    	if( res.imgurl ){
	        	add_thumbnail( res.imgurl );
	    	}else{
	    		alert("Upload Error");
	    	}
        }, 'json');
    });

    $('#select-image').change(function() {
    	
    });
});
