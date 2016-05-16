'use strict'

$(function() {

    var data = {
        pageTitle: 'Тест по программированию',
        questions: [{
            questionName: "1. Вопрос № 1:",
            variant: [{
                answer: 'Ответ № 2',
                right: false
            }, {
                answer: 'Правильный ответ',
                right: true
            }, {
                answer: 'Ответ № 3',
                right: false
            }, ],
            inputName: ['11', '12', '13'],
        }, {
            
            questionName: "2. Вопрос № 2:",
            variant: [{
                answer: 'Ответ № 1',
                right: false
            }, {
                answer: 'Правильный ответ',
                right: true
            }, {
                answer: 'Ответ № 3',
                right: false
            }, ],
            inputName: ['21', '22', '23'],
        }, {

            questionName: "3. Вопрос № 3:",
            variant: [{
                answer: 'Ответ № 1',
                right: false
            }, {
                answer: 'Правильный отве',
                right: true
            }, {
                answer: 'Ответ № 3',
                right: false
            }, ],
            inputName: ['31', '32', '33'],
        }],
        result: "Проверить"
    };

    //local storage
    localStorage.setItem('questions', JSON.stringify(data));
    var newObj = JSON.parse(localStorage.getItem('questions'));

    //template
    var $html = $('#test').html();
    var $body = $('body');
    var content = tmpl($html, {
        data: newObj
    });
    $body.append(content);
    
// modal window
    var $overlay;
    var $modal = $('.js-modal');
    var $close = $('.js-close');
    var $result = $('.js-result');

    function hideModal() {
        $overlay.remove();
        $modal.removeClass('show')
    }

// verify answers
    function verify(e) {
        e.preventDefault();
        $close.one('click', hideModal);

        $overlay = $('<div class="overlay"></div>');
        $body.append($overlay);
        $modal.addClass('show');

        $('.block').each(function() {
            var $_this = $(this);
            $_this.find('input[type="checkbox"]');
        });

        //arr with right answers
        var rightAnswers = [];
        var getRightAnswers = function() {
            for (var i = 0; i < newObj.questions.length; i++) {
                for (var j = 0; j < newObj.questions[i].variant.length; j++) {
                    var currentAnswer = newObj.questions[i].variant[j].right;
                    rightAnswers.push(currentAnswer);
                }
            }
        };
        getRightAnswers();
        
        //arr with user answer
        var userAnswers = [];
        var getUserAnswers = function() {
            $('input[type="checkbox"]').each(function() {
                if ($(this).prop('checked')) {
                    userAnswers.push(true);
                } else {
                    userAnswers.push(false);
                }
            });
        };
        getUserAnswers();
        
        //compare two arrays
        var resultTest = JSON.stringify(rightAnswers) == JSON.stringify(userAnswers);
			if (resultTest) {
			    $result.text('Все ответы верны!')
			} else {
			    $result.text('Тест не пройден!')
			}

        //delete checked
        $('input[type="checkbox"]').each(function() {
            $(this).removeAttr('checked')
        });        
    };

    $('.js-send').on('click', verify);

})
