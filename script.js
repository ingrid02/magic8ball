$(document).ready(function(){

var magic8ball={};

var answerlist = ["yes, do it","not a wise choice","you only live once","definitely not","are you serious", "that is not important right now"];

  $("#answer").hide();

magic8ball.answerlist = answerlist


magic8ball.askQuestion = function(question){
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  $("#8ball").effect( "shake" );
var randomNumber = Math.random();

 var randomNumberForanswerlist = randomNumber * this.answerlist.length;

var randomIndex = Math.floor(randomNumberForanswerlist);


var randomAnswer = this.answerlist[randomIndex];

  $("#answer").text( randomAnswer );

  console.log(question);
  console.log(randomAnswer);

};
var onClick = function() {

$("#answer").hide();
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  //wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt
           var question = prompt("ASK A YES/NO QUESTION")
           magic8ball.askQuestion(question)
       }, 500);

  $("#answer").fadeIn(4000);


};

$("#questionButton").click( onClick );







});


/*OBJECT Magic 8-ball
PROPERTY magic 8 ball answer = [yes do it, not a wise choice, you only live once, definitely not, are you serious, that is not important right now]

FUNCTION ask magic 8 ball question
INPUT question
shake 8 ball, 8 ball picks random answer
OUTPUT magic 8 ball answer

STOP


RUN FUNCTION ask magic 8 ball question with INPUT "Can I complete 2 weeks of lessons in 1 week"
*/
