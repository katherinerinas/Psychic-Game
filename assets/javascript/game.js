//dont forget to link this page with the html page!!!
//user guesses	check.
   //computer makes generated guessescheck
   //wins-number of times the user is right check
   //losses-number or times the user is wrongcheck
   //guesses left (will count down to 0) check
   //guesses so far-
   //reset game after guesses left =o, maybe set a loop?
 
  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var wins =0
  var losses=0
  var guessesLeft=15
  var guessesSofar=[]
  
  
  document.onkeyup = function(){
   	var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesLeft--;
   
        	
  
   
   	var computerGuess = options[Math.floor(Math.random()*options.length)];
  
   	 
   	

   	if(userguess===computerGuess){
   		wins ++;
   		alert("You may be Psychic! wins: " + wins);
   	}
    //SEE IF POSSIBLE TO ADD AUDIO CLIP OF AMANDA SEYFRIED FROM MEAN GIRLS "ITS LIKE I HAVE ESPN OR SOMETHING!"

    if (guessesLeft===-1){
    	wins =0;
    	losses =0;
    	guessesLeft=15;
    alert("You might be a phony..Try again!");

    //SEE IF POSSIBLE TO ADD AUDIO CLIP OF BETTE MIDDLER FROM HOCUS POCUS "AHHHIVE LOST MY POWER!"
    	
    }

   else{
   	losses++;
   	
   }

   

   var html ="<p>(Press any letter to begin!)</p>" + 
   "<p><h3>Wins: " + wins +"</h3></p>"+
   "<p><h3>Losses: " + losses + "</h3></p>" +
   "<p><h3>Guesses Left: " + guessesLeft + "</h3></p>" +
   "<p><h3>Your Current Guess:" + userguess + "</h3></p>";

   
   document.querySelector("#game").innerHTML = html;


   }
   

