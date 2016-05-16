$(function() {
	
	var aboutMe = $('#aboutme').html();

	var data = {
			name: 'Деревянченко Олеся Борисовна',
			position: 'Участник проекта GoFoIT',
			reasons: ['<li>Хочу получить новые знания</li>',
								'<li>Хочу попробовать себя в новом деле</li>'
							],
			phone: '+38(099) 974 77 91',
			fb: '<a target="blank" href="https://www.facebook.com">facebook</a>',
			feedback: 'Мастерство приходит с опытом, а опыт с желанием учиться, развивайте себя каждый день'
		};

	var content = tmpl(aboutMe, data);
	$('.sheet1').append(content);

});