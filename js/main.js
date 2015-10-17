$(document).ready(function (){
	$('.btnScan').on('click', function (){
		var code = $('.scanCode').val();

		$.ajax({
			method: "POST",
			url: "http://localhost:1337/getGoods",
			data: {
				code: code
			}
		})
		.done(function (data){
			$('.name span').text(data[0].name);
			$('.price span').text(data[0].price);
			$('.art span').text(data[0].art);
			$('.code span').text(data[0].code);
			// console.log(data.code);
			// console.log(data.price);
			// console.log(data.name);
		})
		.fail(function (){
			console.log('FAIL');
		})
	})
})