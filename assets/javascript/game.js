//------------Variables---------------------------------------------------------------//

var wordBank = ["coding", "developer", "debug", "gitlab", "patience", "tablet",
                "bootcamp", "laptop", "georgia", "javascript"];

var  wins =0, loses =0, lettersGuessed=[], attempts =6, guessWord, tempword =[];
var hangMan=["head", "torso", "leftarm", "rightarm", "leftleg", "rightleg"];


var hitsound = document.getElementById("Audio1");

var misssound = document.getElementById("Audio2");

var pic = document.getElementsByClassName("picdiv");

//"url('img_tree.png')";


//----------------------------------Main----------------------------------------------------//


// Randomly chooses a choice from the options array. This is the Computer's guess.
  guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];




  document.onkeyup = function(event) {


    reset();
    
    document.onkeyup = function(event) {

      if(!checkGameOver()){

      var userLetter = event.key;

      validateChoice(userLetter,guessWord,tempword);

      updateScoreboard();

        checkGameOver();
      }
    else /*if(checkGameOver())*/{

      document.getElementById("message").innerHTML = "GAME OVER!";

      updateScoreboard();
      reset();
  }

}
    
}
//takes the word selected by the computer, and copies blanks into the guessword, the length of the computer word
function clearWord(word1, word2){

    for(var i = 0; i<word1.length; i++){

        word2[i] = "_"      

     }

      document.getElementById("guess").innerHTML = word2.join(' ');

}

//validate user's letter
function validateChoice(x, word1, word2) {

    //a is a counter for the number of letter occurrences in the word
    var a = 0;
    var b = 0;
    //validate the input is a character
    if (x.search(/^[a-zA-Z]+$/) === -1){
        document.getElementById("message").innerHTML = "Only characters please.";
         
    }
    else{
      for(var i = 0; i<word1.length; i++){
          if(word1[i] == x){
            
              word2[i] = x;
              a++;
          }
          if(lettersGuessed[i]==x){ //update counter if letter has already been guessed
              b++
          }
      }
      if(a == 0){ //if the number of occurrences in the word is 0
        misssound.play();
        document.getElementById("message").innerHTML = "Sorry, there is no " + x + " in the word.";
        attempts--;
        lettersGuessed.push(x);
      }
      else if(a > 0 && b == 0) {
          hitsound.play();
          document.getElementById("message").innerHTML = "Yes, " + x + " is in the word!";

          pic.backgroundImage = "url('assets/images/swoosh.jpeg')";

          


        //document.getElementsByClassName("picdiv").style.backgroundImage =  "url('..images/swoosh.jpeg')";
    
       
      }
  }
   
}

function checkGameOver(){
    
    var count = 0;

    if(attempts > 0){

    for(var i=0; i<tempword.length; i++){
        if(tempword[i] == "_")
          
         count++;
      }
        
       if(count > 0){
         //console.log("game is not over");
         return false;
        }
       else if(count == 0){
         //console.log("game is over");
         wins++;
         document.getElementById("message").innerHTML = "Game Over! Press any key to continue";
         return true;
        }

    }   

    else if(attempts === 0){

        loses++;
        document.getElementById("message").innerHTML = "Game Over! Press any key to continue.";
        return true;
    }

}

function updateScoreboard (){

    document.getElementById("guess").innerHTML =  tempword.join(' ');

    document.getElementById("guessLetters").innerHTML = lettersGuessed.join(' ');;

    document.getElementById("attempts").innerHTML = attempts;

    document.getElementById("wins").innerHTML = wins;

    document.getElementById("loses").innerHTML = loses;

}


function reset(){

    lettersGuessed=[], attempts = 6, tempword=[];

    guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    clearWord(guessWord, tempword);

    document.getElementById("message").innerHTML = "Guess a letter of the word.";

    updateScoreboard();
}