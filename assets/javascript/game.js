var wordBank = ["coding", "developer", "debug", "gitlab", "patience", "tablet", 
                "bootcamp", "laptop", "georgia", "javascript"];

var wins =0, loses =0, userLetter=[], attempts =7, guessWord, tempword =[];
var hangMan=["head", "torso", "leftarm", "rightarm", "leftleg", "rightleg"];

      // Randomly chooses a choice from the options array. This is the Computer's guess.
var guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//takes the word selected by the computer, and copies blanks into the guessword, the lenght of the computer word
function clearWord(word1, word2){

    for(var i = 0; i<word1.length; i++){

        word2[i] = "_"      

     }
      //console.log(word2.join(' '));

      document.getElementById("guess").innerHTML += word2.join(' ');

}

clearWord(guessWord, tempword);

document.onkeyup = function(event) {

    
    
    //checkGameOver(); 
    /*
    //while attemps > 0, and game is not over
    while(== false){
  

    for(var i = 0; i<5; i++){  */
    var userLetter = prompt("Please guess a letter of the word")
    
    validateChoice(userLetter,guessWord,tempword);

    updateScoreboard();

    
}


//validate user's letter
function validateChoice(x, word1, word2) {

    var a = 0;
    //validate the input is a character
    if (x.search(/^[a-zA-Z]+$/) === -1){
        alert("Only characters please.");
         
    }
    else{
      for(var i = 0; i<word1.length; i++){
          if(word1[i] == x){
            
              word2[i] = x;
              a++;
          }
      }
      if(a == 0){
        alert("Sorry, there is no " + x + " in the word.")
        attempts--;
        userLetter.push(x);
      }
      else{
       alert("Yes, " + x + " is in the word!")
    
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
        console.log(count, " this is the count")
       if(count > 0){
         console.log("game is not over");
         return false;
        }
       else if(count == 0){
         console.log("game is over");
         return true;
        }

    }   

    else if(attempts === 0){

        //return true;
        console.log("game is over");
    }

}

function updateScoreboard (){

    document.getElementById("guess").innerHTML = "Guess the word: " + tempword.join(' ');

    console.log("guesses updated");

    document.getElementById("guessLetters").innerHTML = "Letters Guessed: " + userLetter;

    console.log("guess letters updated")

    document.getElementById("attempts").innerHTML = "Attempts: " + attempts;

    document.getElementById("wins").innerHTML = "Wins: " + wins;


    document.getElementById("loses").innerHTML = "Loses: " + loses;

    console.log("losses updated");
}