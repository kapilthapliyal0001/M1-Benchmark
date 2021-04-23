let array = [];

let win = true;

let i = 1;

let num = 0;

let score = 0;

//timeout function
var delayInMilliseconds = 1000; //1 second

function refreshPage(){
    window.location.reload();
    i = 1;
    setTimeout(function() {
        target_sec.innerText = "***********"
    }, 1000);
    num_generator();
} 


// function to generate a random number and append it into an array

let target_sec = document.getElementById("secret_number");

// number generator function which also changes the secret number shown in the middle!

const num_generator = function () {
  if (i === 0) {
    num = "***";

    target_sec.innerText = num;

    array[i - 1] = num;

    i++;

    console.log(array);

    return num;
    // console.log("The first number is: ", num);
    console.log(array);
  } else {
    num = Math.floor(Math.random() * Math.pow(10, i));

    array[i - 1] = num;

    i++;

    target_sec.innerText = num;

        // setting up a timeout function in between for one second

    setTimeout(function() {
        target_sec.innerText = "***********"
    }, 1000);


    console.log(array);

    return num;
  }
};




// console.log(i, "is the value of i 1");

// num_generator();

// adding event listener to the button to start the first random number;

let start = document.getElementById("start_button");

start.addEventListener("click", function () {
  num_generator();
});

// check the solution when the submit button is clicked;;

let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  let num_check = parseInt(document.getElementById("user_input").value);

  // remove the input tag text;

  document.getElementById("user_input").value = " ";            


  //   console.log("the number 1 to be checked is :", num_check);

  console.log(num_check);


  // Check if the number is equal to the random number generated and print the message!!

  console.log(i, "is the value of i 2");

  if (num_check === array[array.length - 1]) {
            score += 10;
            document.getElementById("result").innerText = `Congratulations! You win the ${

            i-1
            } th round and your score is ${score} points!`;
            // console.log("win");
            // console.log(array[array.length - 1], "is the number to be verified !");
            num_generator();
            num_check = "";

  } else {
            // console.log(array[array.length - 1], "is the number 2 to be verified !");
            // console.log(typeof num_check, num_check);

            document.getElementById("result").innerText = `Unfortunatley You lost in the ${
            i-1
            } th round! and your score is ${score} points !`;


            i = 1;
            console.log("lost!");
            num_generator();
            num_check = "";

            setTimeout(function() {
            document.getElementById("result").innerText = "Let's start fresh!"
            }, 2500)
            num_generator();
            setTimeout(function() {
                document.getElementById("result").innerText = "  "
                }, 1500)




  }
});

let text = `DIFFICULTY Level: ${Math.floor(i)} `;
//checking the difficulty level!

document.getElementById("diffi").innerText = text;


// console.log(i, "is the value of i 3");

// <!--
//         QUIZ GAME!

//         RULES:
//         / The player must guess correctly a certain amount of questions
//         / Each correct answer gives him one point
//         / Answers could be multiple or true/false
//         / At the end of the game, the user must know his total score

//         QUESTIONS:
//         / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
//         / Could be multiple of boolean (true / false)
//         / [EXTRA] Show if the answer was wrong or correct after clicking
//         / [EXTRA] Present them one a time

//         HINTS:
//         / Keep a global variable score for the score
//         / Keep a variable questionNumber for the question the user is answering
//         / When questionNumber is bigger then the available questions, present the score
//         / Start working with the question saved in a variable, and then include AJAX etc
//         / Start with the easier version and THEN implement the EXTRAs
//         / Please debug everything / try it on the console to be sure of what to expect from your code

//         EXTRA:
//         / Show if the answer was wrong or correct after clicking
//         / Present questions one a time
//         / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)

//     -->
