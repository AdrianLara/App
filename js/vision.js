/*$(document).ready(function(){
	$("#sendImg").click(function() {
		var API_KEY = "AIzaSyCOozKtMmJROwMSK1hEThdiUG4XUIOs8YU";
		var data = new FormData();
		jQuery.each($("#upImg")[0].files, function(i, file) {
    		data.append('file-'+i, file);
		});
		 $.ajax({
		  type: 'POST',
          url: 'https://vision.googleapis.com/v1alpha1/images:annotate?key=' + API_KEY,
          data: data,
          success: function(data) {
          	$("#results").html("hola mundo");       
          }		 	
		 })
	}
	);
});*/

$(document).ready(function(){
	$("#sendImg").click(function() {
		$("#results").html("<b>Hola mundo</b>");
		alert("no vale esta huevada");
	});
});