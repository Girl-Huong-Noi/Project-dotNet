
$(document).ready(function () {


	SubTotal();
	function SubTotal(isEventChange) {
		var subTotal = 0;


		$(".totalPrice").each(function () {
			var price = $(this).text();
			//alert(price)
			//price.slice(0);

			subTotal = subTotal + parseFloat(price);
			
			
			if (!isEventChange) {
				$(this).html(price);
			}
			//alert("sub"+subTotal);
			
			$("#subTotal").html(subTotal);
		/*	$("#delivery").html((subTotal * 0.05));
			$("#total").html(subTotal + (subTotal * 0.05) + " $")*/


		});

	};



	$(".qty-text").change(function () {
		var quantity = $(this).val();
		
		let price = $(this).closest("tr").find(".price").attr("data-value");

		var totalPrice = quantity * parseInt(price);
		
		$(this).closest("tr").find(".totalPrice").html(totalPrice);
		SubTotal(true);
		//update cart items quantity
		$('.qty-text').blur(function () {
			var sLMoi = $(this).val();
			
			var iMaSP = $(this).attr("data-value");
			
			$.ajax({
				url: '/GioHang/CapNhatGioHang',
				type: "GET",
				cache: false,
				dataType: "json",
				contentType: 'application/json; charset=utf-8',
				data: {
					iMaSP: iMaSP,
					sLMoi: sLMoi
				},
				async: true,
				success: function (data) {
					alert(data);
				}

			});
		});

	});




});


