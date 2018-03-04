$(document).ready(function() {

	var intervalId;
	var count;
	
	var stopwatch = {

		count: 30,

		run: function () {
			intervalId = setInterval(stopwatch.decrement, 1000);
			console.log(count);
		},

		decrement: function() {
			stopwatch.count--;
			  $('#show-number').html(stopwatch.count);
			  if (stopwatch.count === 0){
				stopwatch.stop();
			}
		},

		stop: function() {
			clearInterval(count);
		}
	};

    var newQuiz = [ {
			question: "This is the flag of which country?",
			picture: './assets/images/united_states.png',
			choices: ['U.S.A','Britain','Austrailia','Canada'],
			correct: 1,
		},
		{	
			question: "This is the flag of which country?",
			picture: './assets/images/france.png',
			choices: ['England','U.S.A','France','Scotland'],
			correct: 3,
		},
		{	
			question: "This is the flag of which country?",
			picture: './assets/images/iran.png',
			choices: ['Iran','Greece','Italy','Turkey'],
			correct: 1,
	}];
	
	var flagPic = $(`<img src=''>`);

	function nextQuest(){
		var random = Math.floor(Math.random()*newQuiz.length);
		$('.questions').text(newQuiz[random].question);
		console.log(newQuiz[random].question);
		
		$(flagPic).attr('src', newQuiz[random].picture);
		$('.flag').append(flagPic);

		$('#choice0').text(newQuiz[random].choices[0]);
		$('#choice1').text(newQuiz[random].choices[1]);
		$('#choice2').text(newQuiz[random].choices[2]);
		$('#choice3').text(newQuiz[random].choices[3]);
		// console.log(nextQuest);
	}



	$("#start").on("click", function() {
		nextQuest();
		stopwatch.run;
	});

	// $("#start").on("click", stopwatch.run());
});
