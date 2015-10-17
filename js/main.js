$(document).ready(function (){
	$('.btnScan').on('click', function (){
		var code = $('.code').val();

		$.ajax({
			method: "POST",
			url: "http://localhost:1337/getGoods",
			data: {
				code: code
			}
		})
		.done(function (data){
			console.log(data);
		})
		.fail(function (){
			console.log('FAIL');
		})
	})
})