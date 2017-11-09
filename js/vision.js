
$(document).ready(function(){
	$("#upImg").change(function previewFile(){
		var preview = document.querySelector("img");
		var file    = document.querySelector('input[type=file]').files[0];
		var reader = new FileReader();
		reader.onloadend = function(){
			preview.src = reader.result;
		}
		if (file) {
			reader.readAsDataURL(file);
		} else {
			preview.src = "";
		}
	});

	$("#sendImg").click(function() {
		var API_KEY = "AIzaSyCOozKtMmJROwMSK1hEThdiUG4XUIOs8YU";
		var data = document.querySelector("img").src;
		/*var data = new FormData();
		jQuery.each($("#upImg")[0].files, function(i, file) {
    		data.append('file-'+i, file);
		});*/
		 $.ajax({
		  type: 'POST',
          url: 'https://vision.googleapis.com/v1alpha1/images:annotate?key=' + API_KEY,
          data: data,
          processData: false,
          contentType: false,
          success: function(data) {
          	$("#results").html(data);       
          }		 	
		 })
	}
	);
});

/*$(document).ready(function(){
	$("#sendImg").click(function() {
		$("#results").html("<b>Hola mundo</b>");
		alert("ok");
	});
});*/