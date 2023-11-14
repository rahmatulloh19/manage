$(document).ready(function () {
	$(".costumer__list").slick({
		infinite: true,
		centerMode: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		edgeFriction: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1110,
				settings: {
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});
