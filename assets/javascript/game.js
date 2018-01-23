//dont forget to link this page with the html page!!!
//user guesses	check.
   //computer makes generated guesses
   //wins-number of times the user is right
   //losses-number or times the user is wrong
   //guesses left (will count down to 0)
   //guesses so far-the letters that the user typed (will probably use the document.onKeyup.ToLowerCase)
 
  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var wins =0
  var losses=0
  var guessesLeft=0
   
   document.onkeyup = function(){
   	var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userguess);
   
   	var computerGuess = options[Math.floor(Math.random()*options.length)];

   	
   	console.log(computerGuess);

   	if(userguess===computerGuess){
   		wins ++;
   		alert("wins: " + wins);
   	}

   else{
   	losses++;
   	alert("losses: "+ losses);
   }

}