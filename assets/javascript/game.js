var wordBank = ["coding", "developer", "debug", "gitlab", "patience", "tablet", 
                "bootcamp", "laptop", "georgia", "javascript"];

var  wins =0, loses =0, lettersGuessed=[], attempts =6, guessWord, tempword =[];
var hangMan=["head", "torso", "leftarm", "rightarm", "leftleg", "rightleg"];

      // Randomly chooses a choice from the options array. This is the Computer's guess.
var guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];





 
  document.onkeyup = function(event) {
    
    clearWord(guessWord, tempword);
    
    document.onkeyup = function(event) {

    if(!checkGameOver()){
    
    //userLetter = document.getElementById("letter").value;
    /*
     getLetter
     
     //prompt("Please guess a letter of the word")

    */

    var userLetter = event.key;

    //document.getElementById("letter").innerHTML = userLetter;


    
    validateChoice(userLetter,guessWord,tempword);

    //document.getElementById("letter").value = "";

    updateScoreboard();


  }
  updateScoreboard();
}
    
}
//takes the word selected by the computer, and copies blanks into the guessword, the lenght of the computer word
function clearWord(word1, word2){

    for(var i = 0; i<word1.length; i++){

        word2[i] = "_"      

     }
      //console.log(word2.join(' '));

      document.getElementById("guess").innerHTML += word2.join(' ');

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
         console.log("game is not over");
         return false;
        }
       else if(count == 0){
         console.log("game is over");
         wins++;
         return true;
        }

    }   

    else if(attempts === 0){

        loses++;
        console.log("game is over");
        return true;
    }

}

function updateScoreboard (){

    document.getElementById("guess").innerHTML =  tempword.join(' ');

    document.getElementById("guessLetters").innerHTML = lettersGuessed;




    //console.log("guess letters updated")

    document.getElementById("attempts").innerHTML = attempts;

    document.getElementById("wins").innerHTML = wins;

    document.getElementById("loses").innerHTML = loses;

    //console.log("losses updated");
}

function getLetter(event){

    var x = event.keyCode;               // Get the Unicode value
    
    userLetter = String.fromCharCode(x);      // Convert the value into a character
      
}