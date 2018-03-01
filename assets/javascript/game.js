var wordBank = ["coding", "developer", "debug", "gitlab", "patience", "tablet", 
                "bootcamp", "laptop", "georgia", "javascript"];

var  wins =0, loses =0, lettersGuessed=[], attempts =6, guessWord, tempword =[];
var hangMan=["head", "torso", "leftarm", "rightarm", "leftleg", "rightleg"];

      // Randomly chooses a choice from the options array. This is the Computer's guess.
  guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];


function reset(){

    lettersGuessed=[], attempts = 6, tempword=[];

    guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    clearWord(guessWord, tempword);

    document.getElementById("message").innerHTML = "Guess a letter of the word.";

    updateScoreboard();
}



 
  document.onkeyup = function(event) {
    
    /*
    clearWord(guessWord, tempword);

    document.getElementById("message").innerHTML = "Guess a letter of the word.";
    */

    //reset();
    
    document.onkeyup = function(event) {

    if(!checkGameOver()){
    

    var userLetter = event.key;

    //document.getElementById("letter").innerHTML = userLetter;

    validateChoice(userLetter,guessWord,tempword);

    //document.getElementById("letter").value = "";

    updateScoreboard();

    //checkGameOver();


  }
  else /*if(checkGameOver())*/{

  updateScoreboard();
  reset();
  }

}
    
}
//takes the word selected by the computer, and copies blanks into the guessword, the lenght of the computer word
function clearWord(word1, word2){

    for(var i = 0; i<word1.length; i++){

        word2[i] = "_"      

     }
      //console.log(word2.join(' '));

      document.getElementById("guess").innerHTML = word2.join(' ');

}

//validate user's letter
function validateChoice(x, word1, word2) {

    var a = 0;
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
      }
      if(a == 0){
        document.getElementById("message").innerHTML = "Sorry, there is no " + x + " in the word.";
        attempts--;
        lettersGuessed.push(x);
      }
      else{
        document.getElementById("message").innerHTML = "Yes, " + x + " is in the word!";

        //document.getElementsByClassName("picdiv").style.backgroundImage =  "url('...images/swoosh.jpeg')";
    
       
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

    //console.log("guess letters updated")

    document.getElementById("attempts").innerHTML = attempts;

    document.getElementById("wins").innerHTML = wins;

    document.getElementById("loses").innerHTML = loses;

}
/*
function getLetter(event){

    var x = event.keyCode;               // Get the Unicode value
    
    userLetter = String.fromCharCode(x);      // Convert the value into a character
      
}
*/