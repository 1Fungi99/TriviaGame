$(document).ready(function () {
    var answer1 = ['Jam', 'Candy', 'Marmalade', 'Pancakes'];
    var answer2 = ['Be Your Own Cleansing Pool', 'Be Your Own Person', 'Be Your Own Lightning Bearer', 'Be Your Own Windkeeper'];
    var answer3 = ['Phoebe\'s apartment', 'Monica\'s dollhose', 'Phoebe\'s dollhouse', 'Monica\'s apartment'];
    var answer4 = ['Bahamas', 'Riviera', 'Caribbean', 'Puerto Rico'];
    var answer5 = ['The colour was wrong', 'It had a stain', 'It was cut in half', 'It was torn'];
    var answer6 = ['Tanya', 'Tina', 'Tillie', 'Tara'];
    var answer7 = ['100', '72', '52', '86'];
    var answer8 = ['Cups and ice', 'Balloons and ice', 'Cups and food', 'Ice and food'];
    var answer9 = ['David', 'Eddie', 'Eric', 'Mark'];
    var answer10 = ['Chandler and Janice', 'Chandler and Monica', 'Joey and Monica', 'Janice and Ross'];

    var friendsQuestions = [
        "To get over Richard, what did Monica start making?",
        "What was the name of the self help book that the girls loved?",
        "Where was the 'Aroma' room?",
        "Where did Monica and Ross' parents jet off to for Thanksgiving?",
        "What was wrong with the couch Ross returned to the store?",
        "What was the name of Eddie's ex-girlfriend?",
        "How many long-stemmed roses did Ross send to Emily?",
        "What was Phoebe in charge of at Rachel's suprise party?",
        "What was the name of the Photographer who almost moved in with Chandler?",
        "Who did Phoebe think would have very hairy children?",
    ]
    var count = 1;
    var right = 0; var wrong = 0;


    $(".start").on("click", function () {
        $(".first").empty();
        questions();


    });
    function questions() {
        console.log("questions() fire")
        for (var i = 0; i < friendsQuestions.length; i++) {
            var item = $('<br><h1>');
            $(item).text('Question ' + count + ': ' + friendsQuestions[i]);
            $(item).attr("data-answer", "answer" + count);
            var tracker = $(item).attr("data-answer");
            $(item).attr('id', 'answer' + count);
            $('.question').append(item);
            count++;
            if (tracker == 'answer1') {
                for (var x = 0; x < answer1.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer1[x]);
                    $(smallerItem).attr("id", answer1[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer1[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer2') {
                for (var x = 0; x < answer2.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer2[x]);
                    $(smallerItem).attr("id", answer2[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer2[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer3') {
                for (var x = 0; x < answer3.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer3[x]);
                    $(smallerItem).attr("id", answer3[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer3[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer4') {
                for (var x = 0; x < answer4.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer4[x]);
                    $(smallerItem).attr("id", answer4[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer4[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer5') {
                for (var x = 0; x < answer5.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer5[x]);
                    $(smallerItem).attr("id", answer5[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer5[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer6') {
                for (var x = 0; x < answer6.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer6[x]);
                    $(smallerItem).attr("id", answer6[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer6[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer7') {
                for (var x = 0; x < answer7.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer7[x]);
                    $(smallerItem).attr("id", answer7[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer7[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer8') {
                for (var x = 0; x < answer8.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer8[x]);
                    $(smallerItem).attr("id", answer8[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer8[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer9') {
                for (var x = 0; x < answer9.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer9[x]);
                    $(smallerItem).attr("id", answer9[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer9[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }
            if (tracker == 'answer10') {
                for (var x = 0; x < answer10.length; x++) {
                    var smallerItem = $('<p>');
                    $(smallerItem).text(answer10[x]);
                    $(smallerItem).attr("id", answer10[x]);
                    $(smallerItem).attr("class", 'answers');
                    var checkbox = $('<input type="checkbox" class="myCheck">');
                    $(checkbox).attr("data-answer", answer10[x]);
                    $(smallerItem).prepend(checkbox);
                    $(item).append(smallerItem);
                }
            }

        }
    }

    $(".myCheck").on("click", function () {
        console.log('fire');
        var a = $(this).attr("data-answer");
        console.log(a);
    });

});