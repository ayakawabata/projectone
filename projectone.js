$(function(){

// 1. create two separate object constructors to store the info for
//   1) name (player1)
//   2) points (player1)
//   1) name (player2)
//   2) points (player2)

// 2. create a variable that holds the user recall (input)
// var turnCount=0;
//      $('#firstbutton').on('click', function(){
//            if (turnCount % 2 === 0){
//            prompt ("what's your name?");
//            } else {
//           //player 2's turn (O)
//              $(this).text('O');
//              checkVictory('O');
//            }
//          turnCount++;
//      });
// 3. create a variable that holds the randomly generated number
// a function that gets them all,
//puts them in an array, then pops them off one at a time with a delay in between,
//fading them in one at a time.
var numbers = ['0','1','2','3','4','5','6','7','8','9']; // store num as string so that it generates random numbers because mathrandom uses the number of items in array
var ranNum = [];
var playerAnswer = [];
//var playerPoints = 0;
var max = 2;

var playerAnswerArr = [];

// var timesRun = 0;

function start(){
  $('.num').hide(); // hide div that contains numbers
  $('.yourAnswer').hide();
  $('.submitButton').hide();
  $('.message').hide();
  $('.startAgainButton').hide();
}
start();

function digit3 (){

  $('.startbutton').click(function() {
  $('.rules').hide();
  $(this).hide();  //make it appear after the sequence is done
  $('.message').hide();
  $('.num').show();
  //$('.num').show();
  // SHUFFLE NUMBER HERE!
  // playerAnswerArr.length = 0;


  for (var n = 1; n < max; n++) {
  ranNum.push(numbers[Math.floor(Math.random()* numbers.length)]);
  }
    console.log(ranNum);
    // console.log(max);
    //   console.log(ranNum[1]);
    //     console.log(ranNum[2]);
    //       console.log(ranNum[3]);

// $('.num').html(ranNum);
// $('.yourAnswer').show(1000);
// $('.submitButton').show(1000);
//
  var timesRun = 0;
  var interval = setInterval(function(){
    $('.num').text(ranNum[timesRun++]);
    //  put rannum into html for timesRun ++ times
    if (timesRun == ranNum.length) // if the num flashing comes to an end
    {
      $('.num').fadeOut(1000); //fade out the last number
      $('.yourAnswer').show(1000); // show the answer box
      $('.submitButton').show(1000); // show the submit button
      clearInterval(interval);
    }
  }, 900); // flash individually for .9 sec
  })
}
digit3();
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
    playerAnswer.push(ifMatch); // push to playerAnswer array
    console.log(playerAnswer[0]);
    var playerAnswerArrSplit = playerAnswer[0].split('');
    console.log(playerAnswerArrSplit);
    var checkAnswer = ranNum.length == playerAnswerArrSplit.length && ranNum.every(function(element, index){
      return element == playerAnswerArrSplit[index]
    })
    if (checkAnswer === true && max === 11){
      var youDidIt = "You did it! You are not average!";
      $('.message').html(youDidIt);
      $('.startAgainButton').show().click(function(){
        location.reload();
      })
    } else if (checkAnswer === true){
      var correct = "Correct! Next stage!";
      $('.message').html(correct); // show correct message
      $('.startbutton').show(); // show startbutton
      //reset all
      //$('.yourAnswer').remove();
      $('.yourAnswer').val('');
        $('.num').text('');
      ranNum.length = 0;
      playerAnswer.length = 0;
      playerAnswerArr.length = 0;
      max = max + 1;
      // timesRun = timesRun + 1;
    } else if (checkAnswer === false){
      var incorrect = "Incorrect! Bye-bye."
      $('.message').html(incorrect);
      $('.startAgainButton').show().click(function(){
        location.reload();
      })
    }
    console.log(checkAnswer);
  })
}
submitAnswer();


});
