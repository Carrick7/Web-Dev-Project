// global variables
var Q = 0;   // question counter
var quiz = 0;  // read from screen
var question = 0;  // instance of an array
var option = 0; //  selected value
var options = 0;  // values for selection
var OPTA, OPTB, OPTC, OPTD = "";  // values list
var correct = 0;  // score counter

// read screen function
function quizzicle(x){
    "use strict";
    return document.getElementById(x);
    }

// reset vars for next run
function retakeQuiz(){
    Q = 0;   // question counter
    quiz = 0;  // quiz counter?
    question = 0;  // instance of an array
    option = 0; //  selected value
    options = 0;  // values for selection
    OPTA, OPTB, OPTC, OPTD = "";  // values list
    correct = 0;  // score counter
    generateQuestion();
}

function generateQuestion(){
    "use strict";
    quiz = quizzicle("quiz");

    // check all questions are asked, print score and number of questions asked
    if(Q >= questions.length){
        quiz.innerHTML = "<h2>You got "+correct+" out of "+questions.length+" questions correct</h2>";
        quiz.innerHTML += '<button onclick="retakeQuiz()">Retake Quiz</button>'
        return false;
        }

    // using current Q value get the question from element 0 of the array
    question = questions[Q][0];

    // using current Q value get the options from element1 1-4 of the array
    OPTA = questions[Q][1];
    OPTB = questions[Q][2];
    OPTC = questions[Q][3];
    OPTD = questions[Q][4];

    // print to screen the values above using quiz element relating to quiz in HTML
    quiz.innerHTML = "<h3>"+question+"</h3>";
    quiz.innerHTML += "<input type='radio' name='options' value='A'> "+OPTA+"<br>";
    quiz.innerHTML += "<input type='radio' name='options' value='B'> "+OPTB+"<br>";
    quiz.innerHTML += "<input type='radio' name='options' value='C'> "+OPTC+"<br>";
    quiz.innerHTML += "<input type='radio' name='options' value='D'> "+OPTD+"<br><br>";

    // call the check answer function
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit</button>";

}

function checkAnswer(){
    "use strict";
    options = document.getElementsByName("options");
    // loop for range of selections to see which is pressed
    option = -1;
    for(var i=0; i<options.length; i++){
        if(options[i].checked){
            option = options[i].value;
        }
    }
    // stay on question until selection made
    if(option == -1){
        return;
    }
    // does selection equal last element of the question array -  ie. the answer
    if(option === questions[Q][5]){
        // increment score
        correct++;
    }
    Q++;
    //re-call the question function
    generateQuestion();
}

// start the quiz
window.addEventListener("load", generateQuestion, false);

// question bank
var questions = [
        ["What does HTML stand for?",
        "Home Tool Markup Language",
        "Hyperlinks and Too Much Language",
        "Hypertext Transfer Mode Language",
        "Hyperlinks and Text Markup Language",
        "B"],

        ["Who is making the Web standards?",
        "Google",
        "Mozilla",
        "Microsoft",
        "The World Wide Web Consortium",
        "D"],

        ["What does CSS stand for?",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
        "B" ],

        ["Which HTML attribute is used to define inline styles?",
        "class",
        "font",
        "style",
        "styles",
       "C" ],

        ["Select the correct CSS syntax:",
        "{body;color:black;}",
        "body:color=black;",
        "body{color: black;}",
        "{body:color=black;}",
        "C"],

        ["Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        "alt",
        "src",
        "title",
        "longdesc",
        "A"],

        ["How do you make a list that lists its items with squares?",
		 "list-style-type: square;",
		 "list: square; ",
		 "list-nest: square;",
		 "list-type: square; ",
        "A"],

 		["How do you select an element with id 'demo'?",
		 "*demo",
		 ".demo",
		 "#demo",
		 "select demo",
        "C"],

		["How do you select elements with class name 'test'?",
		 "select test",
		 "*test ",
		 "test",
		 ".test",
        "D"],

        ["How do you select all p elements inside a div element? ",
         "div p",
		 "div.p",
		 "div - p",
		 "p div",
        "A"]

    ];