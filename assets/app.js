

$(document).ready(function(){
var overlay = document.getElementById("overlay");

function loaderFunction() {
    setTimeout(function(){ $("#overlay").fadeOut(); }, 13900);
}

loaderFunction();


var rightGuesses = 0;
var wrongGuesses = 0;
	

	$("button").click(function(){
		firstQuestion();
		secondQuestion();
		thirdQuestion();
		fourthQuestion();
		fifthQuestion();
		displayScore();

	}); 

	function firstQuestion(){
		if (document.getElementById("liquid").checked== true){
			increaseScore();
			console.log(rightGuesses)
		}
	}
	

	function secondQuestion(){
		if (document.getElementById("here").checked== true){
			increaseScore();
			console.log(rightGuesses)
		}
	}

		function thirdQuestion(){
		if (document.getElementById("peach").checked== true){
			increaseScore();
			console.log(rightGuesses)
		}
	}

		function fourthQuestion(){
		if (document.getElementById("cj").checked== true){
			increaseScore();
			console.log(rightGuesses)
		}
	}

		function fifthQuestion(){
		if (document.getElementById("tails").checked== true){
			increaseScore();
			console.log(rightGuesses)

		}
	}

	function increaseScore(){
		rightGuesses++
	}

	function displayScore(){
		alert("Your score was " + rightGuesses + " out of 5!")

			location.reload();
	}

});


