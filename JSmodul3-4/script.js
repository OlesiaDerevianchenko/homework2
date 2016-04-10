
var generate = {
    blockQuontity: 3,  /* Количество блоков ВОПРОС № */
    questionQuontity: 3,   /* Количество вариантов ответа */
    j: 1,
    i: 1,
    
    mainWrap: function() {
       var mainDiv = document.createElement('div');
       mainDiv.classList.add('main_div');
       document.body.appendChild(mainDiv);
       mainDiv.style.maxWidth = '960px';
       mainDiv.style.margin = 'auto';
    },
    
    testH1: function() {
        var h1 = document.createElement('h1');
        h1.innerHTML='Тест по программированию';
        var mainDivClass = document.getElementsByClassName('main_div');
        mainDivClass[0].appendChild(h1);
        h1.style.textAlign = 'center';
        h1.style.marginBottom = '80px';
        h1.style.fontFamily = 'sans-serif';
    },
    
    testSection: function() {
        var divSect = document.createElement('div');
        divSect.classList.add('sect_div--' + this.j);
        var mainDivClass = document.getElementsByClassName('main_div');
        mainDivClass[0].appendChild(divSect);
    },
    
    questionNum: function () {
        var h2 = document.createElement('h2');
        h2.innerHTML = (this.j) + '. Вопрос № ' + (this.j);
        var divSectClass = document.getElementsByClassName('sect_div--' + this.j);
        divSectClass[0].appendChild(h2);
        h2.style.fontFamily='sans-serif';
    },
    
    labelCHeck: function() {
        var divSectClass = document.getElementsByClassName('sect_div--' + this.j);
        var label = document.createElement('label');
        label.innerHTML = '<input type = "checkbox" id = "sect_div__chB--' + (this.j) +'-' + (this.i) + '"' + 'class = "main_div__chkBox"> Вариант ответа № ' + (this.i);
        divSectClass[0].appendChild(label);
    },
    
    brTag: function() {
        var br = document.createElement('br');
        var brParent = document.getElementsByClassName('sect_div--' + this.j);
        brParent[0].appendChild(br);
    },
    
    checkRez: function() {
        var buttonCheck = document.createElement('input');
        buttonCheck.type = 'submit';
        buttonCheck.value = 'Проверить мои результаты';
        buttonCheck.style.display = 'block';
        buttonCheck.style.margin = 'auto';
        buttonCheck.style.width = '300px';
        buttonCheck.style.height = '50px';
        buttonCheck.style.background = '#cfe2f3';
        buttonCheck.style.border = '2px solid black';
        buttonCheck.style.borderRadius = '3px';
        buttonCheck.style.fontSize = '17px';
        var divSectClass = document.getElementsByClassName('main_div');
        divSectClass[0].appendChild(buttonCheck);
    },
    
    blockGen: function () {
                generate.testSection(); /* Див с вопросами */
                generate.questionNum(); /* Заголовок к вопросам */
        
                for (; this.i <=  this.questionQuontity; this.i++) {
                    generate.labelCHeck(); /* Чекбокс и подпись */
                    generate.brTag(); /* BR */
                };
    },
    cycles: function() {
        
            for (; this.j <= this.blockQuontity; this.j++) {
                this.blockGen();
                this.i = 1;
            };
    }
};
generate.mainWrap();
generate.testH1();
generate.cycles();
generate.checkRez();