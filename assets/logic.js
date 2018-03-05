$(document).ready(function() {
	$('.toggle').toggle();
	
	var intervalId;
	var count;


	var correct = 0;
	var score = 0;

	var flagPic = $(`<img src=''>`);

	var randomNumber;

	var remainingQuestionsArray = [];
	
	var stopwatch = {
		count: 5,
		run: function () {
			intervalId = setInterval(stopwatch.decrement, 1000);
		},

		decrement: function() {
			stopwatch.count--;
			  $('#show-number').html(stopwatch.count);
			  if (stopwatch.count === 0){
				stopwatch.stop();
				stopwatch.count = 4;
				nextQuest();

				stopwatch.run();
			}
		},

		stop: function() {
			clearInterval(intervalId);
		}
	};
	


    var newQuiz = [ {
			question: "This is the flag of which country?",
			picture: './assets/images/united_states.png',
			choices: ['U.S.A','Britain','Australia','Canada'],
			correct: 0,
		},
		{	
			question: "This is the flag of which country?",
			picture: './assets/images/france.png',
			choices: ['England','U.S.A','France','Scotland'],
			correct: 2,
		},
		// {	
		// 	question: "This is the flag of which country?",
		// 	picture: './assets/images/.png',
		// 	choices: ['','','',''],
		// 	correct: ,
		// },
		// {	
		// 	question: "This is the flag of which country?",
		// 	picture: './assets/images/.png',
		// 	choices: ['','','',''],
		// 	correct: ,
		// },
		// {	
		// 	question: "This is the flag of which country?",
		// 	picture: './assets/images/.png',
		// 	choices: ['','','',''],
		// 	correct: ,
		// },
		// {	
		// 	question: "This is the flag of which country?",
		// 	picture: './assets/images/.png',
		// 	choices: ['','','',''],
		// 	correct: ,
		// },
		// {	
		// 	question: "This is the flag of which country?",
		// 	picture: './assets/images/.png',
		// 	choices: ['','','',''],
		// 	correct: ,
		// },
		// {	
		// 	question: "This is the flag of which country?",
		// 	picture: './assets/images/.png',
		// 	choices: ['','','',''],
		// 	correct: ,
		// },
		{	
			question: "This is the flag of which country?",
			picture: './assets/images/iran.png',
			choices: ['Iran','Greece','Italy','Turkey'],
			correct: 0,
	}];
	


	var numQuest = newQuiz.length;

	for (i = 0; i < newQuiz.length; i++) {
		var currentIndex = newQuiz[i];
		var currentPicture = currentIndex.picture;
		remainingQuestionsArray.push(currentPicture)
	}


	var getRandomNumber = function() {
		randomNumber = Math.floor(Math.random()*remainingQuestionsArray.length);
	};

	


	function nextQuest(){
		getRandomNumber();
		$('.questions').text(newQuiz[randomNumber].question);
		console.log(newQuiz[randomNumber].question);
		
		remainingQuestionsArray.splice(randomNumber, 1);


		$(flagPic).attr('src', newQuiz[randomNumber].picture);
		$('.flag').append(flagPic);

		$('#choice0').text(newQuiz[randomNumber].choices[0]);
		$('#choice1').text(newQuiz[randomNumber].choices[1]);
		$('#choice2').text(newQuiz[randomNumber].choices[2]);
		$('#choice3').text(newQuiz[randomNumber].choices[3]);
		// console.log(nextQuest);
		if (remainingQuestionsArray.length === 0) {
			$('.toggle').toggle()
			$('.row').prepend("Quiz Completed! You scored " + correct + " out of " + numQuest + "!");
			$("#show-number").hide();
			stopwatch.stop();
		}
	}


	$("#start").on("click", function() {
		nextQuest();
		count = 4;

		$('.toggle').toggle();
		
        $("#show-number").html(stopwatch.run);
		// if (count === 0 ) {
		// $("#show-number").html(stopwatch.stop);
		// }
	});

	
function result() {
	if ($('input').is(':checked')) {
        nextQuest(); 
	}
	else {
		alert("Click a choice!");		
	}
}

$('#btnNext').on('click', function() {
	var answer = ($('input[name="choice"]:checked').val());
    stopwatch.count = 4;
	if (answer == newQuiz[randomNumber].correct) {
		correct++;
	}

	// score++;

	// if (score >= numQuest) {
	// 	$('.toggle').toggle() //.fadeIn("slow");
	// 	$('.row').prepend("Quiz Completed! You scored " + correct + " out of " + numQuest + "!");
	// 	$("#show-number").hide();
	// 	stopwatch.stop();
	// }

	result();

	
	$('#card').hide().fadeIn("slow");
	
	
	$('input[name="choice"]').prop('checked', false);
});

$('#btnBack').on('click', function() {
	if (newQuiz == 0) {
		$('#card').hide().fadeIn("slow");

	} else {
		$('#card').hide().fadeIn("slow");
		correct--;
		score--;
	}

	nextQuest();	
});
	
});
