(function(){
	$('.flex-container').waitForImages(function() {
		$('.spinner').fadeOut();
	}, $.noop, true);
	
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();


function sendEmail(){
	Email.send({
		Host : "smtp.gmail.com",
		Username : "akashkumar126954@gmail.com",
		Password : "9430465410",
		To : 'akashkumar126954@gmail.com',
		From : document.getElementById("email").value,
		Subject : "New contact form Enquiry",
		Body : "Name: " + document.getElementById("email").value
				+ "<br> Comment: "+ document.getElementById("comment").value
	}).then(
	  message => alert("Message Send Successfully")
	);
}