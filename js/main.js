var coolColors = [
	'orange',
	'purple',
	'light-green',
	'light-blue',
	'yellow',
	'deep-orange'
];

var card_click = false

$.ajax({
	url: ("https://behappy.aurorafoss.org/res/values/pt-PT/challenges.xml"),
	success: function (resultChallenges) {
		$.ajax({
			url: ("https://behappy.aurorafoss.org/res/values/pt-PT/quotes.xml"),
			success: function (resultQuotes) {
				for (var i = 1; i <= 6; i++) {
					if (Math.random() >= 0.5)
						var result = resultChallenges.getElementsByTagName("challenges")[0];
					else
						var result = resultQuotes.getElementsByTagName("quotes")[0];
					
					var randomChallenge = result.children[Math.floor((Math.random() * result.childElementCount))];
					$("#challenge-"+i).append(randomChallenge.innerHTML);
					$("#challenge-" + i + "-content").toggleClass("challenge-hidden");
					let colorID = Math.floor(Math.random() * coolColors.length);
					$("#challenge-"+i+"-front").toggleClass(coolColors[colorID]);
					coolColors.splice(colorID, 1);
					$(".challenge-front").toggleClass("lighten-2");
				}
			}
		});
	}
});

function flip(i) {
	if(!card_click)
	{
		$('#challenge-' + i + '-card').toggleClass('challenge-flipped');
		$('#challenge-' + i).toggleClass('challenge-hidden');
		card_click = true;
	}
}