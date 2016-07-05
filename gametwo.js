$(function(){

var words = ["baseball","bicycle","refrigerator","juicy","resist","jaywalk","immunize","backpacks","cappuccino","qualifiable","overwhelming"]; // store num as string so that it generates random numbers because mathrandom uses the number of items in array
var playerAnswer = [];
//var playerPoints = 0;
var max = 2;
var playerAnswerArr = [];
var randwords = words[Math.floor(Math.random()* words.length)];
var reversed = randwords.split("").reverse().join("");

console.log(reversed);

function start(){
  $('.wordsReversed').hide(); // hide div that contains words
  $('.yourAnswer').hide();
  $('.submitButton').hide();
  $('.message').hide();
  $('.startAgainButton').hide();

}
start();

function showWords (){
  $('.startbutton').click(function() {
  $('.rules').hide();
    //randwords.reverse();
  $(this).hide();  //make it appear after the sequence is done
  $('.message').hide();
  $('.wordsReversed').show();

  // for (var n = 1; n < max; n++) {
  //   randwords.push(words[Math.floor(Math.random()* words.length)]);
  // }
//  console.log(reversed);

    //var timesRun = 0;

   $('.wordsReversed').text(reversed)
   $('.wordsReversed').fadeOut(3000, function(){
     $('.yourAnswer').show(1500);
     $('.submitButton').show(1000);
   });
  })
}
showWords();
// function button(){
//   $('.startbutton').click(function() {
//     $(this).hide();  //make it appear after the sequence is done
// digit3();
//   })
// }
// button();

function submitAnswer (){
  $('.submitButton').click(function(){
    $('.yourAnswer').hide();
    $('.submitButton').hide();
    $('.message').show();
    var ifMatch = $('.yourAnswer').val();
    console.log(playerAnswer[0]);

    // var checkAnswer = randwords == ifMatch && randwords.every(function(element, index){
    //   return element == playerAnswerArr[index]
    // })
    if (ifMatch === randwords && max === 7){
      var youDidIt = "You did it! You are not average!";
      $('.message').html(youDidIt);
      $('.startAgainButton').show().click(function(){
        location.reload();
      })
    } else if (ifMatch === randwords){
      var correct = "Correct! Next stage!";
      $('.message').html(correct); // show correct message
      $('.startbutton').show(); // show startbutton
      //reset all
      //$('.yourAnswer').remove();
      $('.yourAnswer').val('');
      $('.wordsReversed').text('');
      playerAnswer.length = 0;
      playerAnswerArr.length = 0;
      reversed.length = 0;
      max = max + 1;
      // timesRun = timesRun + 1;
    } else if (ifMatch !== randwords){
      var incorrect = "Incorrect! Bye-bye."
      $('.message').html(incorrect);
      $('.startAgainButton').show().click(function(){
        location.reload();
      })
    }
    console.log(ifMatch);
  })
}
submitAnswer();


});
