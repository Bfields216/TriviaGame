$(document).ready(function () {

    var card = $("Trivia-area");
    $('#start').on("click", function(){
        // game.start
        // $(this).hide;
    
        $("#timeleft").html("<h3>Time Left: " + timer + "</h3>");
        timer --;

        run();
    });

    function run(){

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement(){
        timer--;

        $("#timeleft").html("<h3>Time Left: " + timer + "</h3>");
        
        if(timer === 0){
            stop();
        }
    }
    //questions
    var questions = [
        {
            question: "When was Lebron James Drafted?",
            answers: ['2003', '2018', '1983', '2010'],
            correctAnswers: '2003'
        },
    ]
    var timer = 30;

    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    


    // function runTimer(){
    //     // if (!running) {
    //     //     // intervalId = setInterval(decrement, 1000);
    //     //     running = true;
    //     //     console.log(timer);
    //     // }
    // }
    // function decrement(){
        

    //     if (timer === 0){
    //         stop();

    //     }
    // }


});


