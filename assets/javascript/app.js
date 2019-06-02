$(document).ready(function () {
    var time = 60;
    var unanswerCount = 0;
    var correctCount = 0
    $("form").hide();
    function count() {
        time--;
        $("#countDownTimer").text(time);
        if (time < 1) {
            clearInterval(intervalId);
        }
    }
    function answerKey() {
        if ($("input[name=Q1]:checked").val() === "2") {
            correctCount++;
        }
        if ($("input[name=Q2]:checked").val() === "4") {
            correctCount++;
        }
        if ($("input[name=Q3]:checked").val() === "1") {
            correctCount++;
        }
        if ($("input[name=Q4]:checked").val() === "4") {
            correctCount++;
        }
        if ($("input[name=Q5]:checked").val() === "2") {
            correctCount++;
        }
        if ($("input[name=Q6]:checked").val() === "3") {
            correctCount++;
        }
        if ($("input[name=Q7]:checked").val() === "1") {
            correctCount++;
        }
        if ($("input[name=Q8]:checked").val() === "4") {
            correctCount++;
        }
        if ($("input[name=Q9]:checked").val() === "4") {
            correctCount++;
        }
        if ($("input[name=Q10]:checked").val() === "2") {
            correctCount++;
        }
        return correctCount;
    }

    function unanswerKey() {
        //check for unaswered questions
        $('.answerClass').each(function () {
            if (!$(this).find('input').is(':checked')) {
                unanswerCount++;
            }
        });
        return unanswerCount;
    }

    function userTimeOut() {
        answerKey();
        unanswerKey();
        var incorrectTotal = (10 - correctCount - unanswerCount);
        //go to results page
        $("form").hide();
        $("#correctAnswers").html("Correct: " + correctCount);
        $("#incorrectAnswers").html("Incorrect: " + incorrectTotal);
        $("#unAnswers").html("Unanswered: " + unanswerCount);

    }
    $("#submit-button").on("click", function () {
        clearInterval(intervalId);
        $("#countDownTimer").hide();
        answerKey();
        unanswerKey();
        var incorrectTotal = (10 - correctCount - unanswerCount);
        //go to results page
        $("form").hide();
        $("#correctAnswers").html("Correct: " + correctCount);
        $("#incorrectAnswers").html("Incorrect: " + incorrectTotal);
        $("#unAnswers").html("Unanswered: " + unanswerCount);

    });
    $("#startQuiz").on("click", function () {
        $("form").show();
        $("#startQuiz").hide();
        intervalId = setInterval(count, 1000);
        setTimeout(userTimeOut, 1000 * 60);

    });

});