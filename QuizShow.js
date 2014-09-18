/**
 * Created by richardburkhardt on 9/17/14.
 */
var data, index = 0;
$.getJSON("data.json")
    .then(function(json) {
        data = json;
        showNext();

        $('#nextButton').click(showNext);
        $('#nextButton').prop('disabled', false);
        $('#shuffleButton').click(shuffleData);
        $('#showAnswer').click(showAnswer);
    });



function showNext(){
    //var index = Math.floor( Math.random() * data.length);
    index++;
    if(index >= data.length){
        index = 0;
    }
    $('#quizQuestion').html(data[index].question);
    $('#quizAnswer').html('');

}

function showAnswer(){
    $('#quizAnswer').html(data[index].answer);
}

function shuffleData(){
    shuffle(data);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}