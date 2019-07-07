$(document).ready(function () {

    var card = $("Trivia-area");
    $('#start').on("click", function () {
        // game.start
        // $(this).hide;
        createQuestions(questionBank[count]);
	    $("#splashScreen").css('display', 'none');
	    $("#questions").css('display', 'inherit');

        //display initial time countdown
        $("#timeleft").html("<h3>Time Left: " + timer + "</h3>");
        timer--;

        run();

        // for (var i = 0; i < questions.length; i++){
        //     // index = Math.floor(Math.random() * questions.length);
        //     // userPick = answers;
        //     console.log(answers);
        // }
        //     function displayQuestions(){
        //     // index = Math.floor(Math.random() * questions.length);
        //     // pick = questions[index];
        // }


        // $("#questions").html('<h2>' + pick.answers + '</h2>')
        //     for(var i = 0; i < pick.answers.length; i++){
        //         console.log(questions)
        //     }
        // });



        function run() {
            //timer countdown function
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        //function that will decrease the number by one
        function decrement() {
            timer--;

            $("#timeleft").html("<h3>Time Left: " + timer + "</h3>");
            //function stops running when it hits 0
            if (timer === 0) {
                alert("Try Again!")
                stop();
            }
        }
        function stop() {
            //clears intervalId
            clearInterval(intervalId);
        }

        $("#reset").on("click", function () {
            // $("#reset").hide();
            timer = 30;
            stop();

        })


        var timer = 30;

        var intervalId;
        var answers = 0;
        var questions = 0;
        // Creating variable to track the questions
        var questionCounter = 0;
        //creating variable for User's pick
        var userPick = [];
        //questions that are in an array with the questions, answers, and correctAnswers



    });


    var question1 = {
		text: "What year was Lebron James drafted?", 
		answer: "2003",
		wrong: ["1003", "2004", "900 b.c."],
		correct: false,
	}

	var question2 = {
		text: "What does ATL STAND FOR?", 
		answer: "ATLANTA.",
		wrong: ["AT LAST ALLISON.", "Almost That Ace.", "."],
		correct: false,
	}

	var question4 = {
		text: "What is your favorite color?", 
		answer: "Silver",
		wrong: ["Red", "Green", "Yellow."],
		correct: false,
	}

	var question3 = {
		text: "Derek Jeter is a particial owner of which MLB team?", 
		answer: "Miami Marlines",
		wrong: ["BuzzLight Year Ballers", "Woody Woodcrackers", "New York Mets"],
		correct: false,
    }
    
    var question5 = {
		text: "Who is the stronger Avenger?", 
		answer: "Thor",
		wrong: ["Iron Man", "Spider-Man", "Captain America."],
		correct: false,
    }
    
    var question6 = {
		text: "What would have happened if Thanos snapped his finger twice?", 
		answer: "Multiverse expansion",
		wrong: ["A new Reality", "House of M", "The Matrix."],
		correct: false,
    }
    
    var question7 = {
		text: "Shake and Bake is referrence from which film?", 
		answer: "Talladega Nights",
		wrong: ["Old School", "Elf", "Blades of Glory."],
		correct: false,
	}

	var questionBank = [question1, question2, question3, question4, question5, question6, question7,];
	var bankLength = questionBank.length;
	var count = 0;
	var intervalID; 
    // var time = 5;
    var answer = 0;
    
    function createQuestions(array) {

        // intervalID = setInterval(timer, 1000);
        $("#nfl").css('background', '#b402027e');
        $("#questions").html("<div><h4>" + array.text);
        $("#answers").html("<div class='text-center btn btn-info btn-block' data-correct='true'>" + array.answer);
    
        for (var i = 0; i < array.wrong.length; i++) {
            $("#answers").append("<div class='text-center btn btn-info btn-block' data-correct='false'>" + array.wrong[i]);
        };
    
        correct();
    }
    
    
    function nextQuestion() {
        createQuestions(questionBank[count]);
    }
    
    
    function correct() {
        $("#answers div").click(function() {
    
            var questCorrect = $(this).data("correct");
    
            if (questCorrect === true) {
                $(this).css('background', '#9CB85C');
                count++;
                clearInterval(intervalID);
                time = 5;
                setTimeout(function() {
                    checkGameEnd();		
                }, 300);
    
            } else {
                $(this).css('background', '#f9534F');
                count++;
                clearInterval(intervalID);
                time = 5;
                setTimeout(function() {
                    checkGameEnd();		
                }, 300);	
            }
    
        });
    }
    
    
    function checkGameEnd() {
        if (count === questionBank.length) {
        $("#questions").css('display', 'none');	
        createResults();
        $("#gameOver").css('display', 'inherit');
    
        } else {
            nextQuestion();
        }
    }
    
    
    function createResults() {
    
        for (var i = 0; i < bankLength; i++) {
    
            $("#results").append("<div>Question #"+[i+1]+': ' + questionBank[i].correct + "</div>");
        }
    }
    
    
    // $("#restart").click(function() {
    
        count = 0;
        $("#results").empty();	
    
    //     for (var i = 0; i < bankLength; i++) {
    //         questionBank[i].correct = false;
    //     }
    
    //     $("#gameOver").css('display', 'none');
    //     $("#splashScreen").css('display', 'inherit');
    
    // });
});
// trivia methods
// method to initialize game

// var question1 = [
//     {
//         question: "When was Lebron James Drafted?",
//         answers: ['2003', '2018', '1983', '2010'],
//         correctAnswers: '2003'
//     },
// var question2 = {
//         question: "Who is a member of Outkast?",
//         answers: ['Batman', 'The One and Only', "Andre 3000", "NWA"],
//         correctAnswers: 'Andre 3000'
// }

        
    

//     {
//         question: "What NBA Franchise has the most Championships?",
//         answers: ['Miami Heat', "LA Lakers", 'Boston Celtics', "The Knights Watch"],
//         correctAnswers: 'Boston Celtics'
//     }

// ]

// var questionsDisplay = function() {
//     $("#questions :not('#sub-but')").empty();
//     // loops through the 10 questions 
//     for (var j = 0; j < 3; j++) {
    
//         $('#questions').prepend('<hr />');
//     }
//     console.log(questionsDisplay);
// }

