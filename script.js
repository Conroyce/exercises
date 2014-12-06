$(function(){
	var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"].sort();
	var $app = function(arr) {
		$('body').append('<ul id="avengers"/>');
		for (var i = 0; i < avengers.length; i++) {
			$('#avengers').append('<li class="' + avengers[i].toLowerCase().split(" ").join("-") + '"> ' + avengers[i] + '</li>');
		}
	};
	$app();
	var $reassemble = function() {
		$('.ant-man').remove();
		$('.wasp').remove();
		$('#avengers').append('<li class="captain-america">Captain America</li>');	
	};
	$reassemble();
});

