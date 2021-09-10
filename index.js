var readlineSync = require("readline-sync");
var score = 0;
var highscore=5;
username=readlineSync.question("may i have your name: ");
console.log("welcome to the guitar quiz "+username)
function play(question,answer)
{
var useranswer=readlineSync.question(question);
useranswer=useranswer.toLowerCase();


if(useranswer===answer){
  console.log("you were right");
  score++
 }
else{
  console.log("you were wrong");
  // score--;
}
}
play("which instrument uses strings to produce sound ","guitar")
play("How many strings does a guitar have ","six")
play("do rockstars use acoustic guitars ","no")
play("what is the smaller version of a guitar ",
"ukulele")
play("does guitar have a hole is the center ","yes")
console.log("YAY...you completed the quiz! your final score is ",score)
console.log("THE HIGH SCORE IS ",highscore)
if(score>=highscore)
{
 console.log("YOU BEAT THE HIGH SCORE YOU ARE THE NEW CHAMPION") 
}
else{
  console.log("TRY AGAIN ! YOU MAY BE THE NEXT CHAMPION")
}