jQuery(document).ready(function(){

jQuery(".niceCheck").mousedown(
/* смена вида чекбокса на клик */
function() {

     changeCheck(jQuery(this));
     
});


jQuery(".niceCheck").each(
/* вид при загрузке страницы */
function() {
     
     changeCheckStart(jQuery(this));
     
});

                                        });

function changeCheck(el)
/* смена вида и значения чекбокса*/
{
     var el = el,
          input = el.find("input").eq(0);
     if(!input.attr("checked")) {
    el.css("background-position","0 -17px");  
    input.attr("checked", true)
  } else {
    el.css("background-position","0 0");  
    input.attr("checked", false)
  }
     return true;
}

function changeCheckStart(el)
/*  если установлен атрибут checked, меняем вид чекбокса*/
{
var el = el,
    input = el.find("input").eq(0);
      if(input.attr("checked")) {
    el.css("background-position","0 -17px");  
    }
     return true;
}
