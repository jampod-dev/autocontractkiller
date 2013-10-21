$("html").attr("ng-app", "");
$(document).ready(function() {
$('input').click(function(){
  if(document.getElementById('individual').checked) {
     $('div.contract span').empty();
 $('span.wewill').append("I'll");
    $('span.we').append("I");
    $('span.us').append("me");
     $('span.our').append("my");
    $('span.were').append("I'm");
}
  if(document.getElementById('company').checked) {
    $('div.contract span').empty();
 $('span.wewill').append("we'll");
    $('span.were').append("we're");
    $('span.we').append("we");
    $('span.us').append("us");
    $('span.our').append("our");    
}
  if(document.getElementById('hourly').checked) {
    $('span.worktype').empty().append('hourly rate')
  }
  if(document.getElementById('fixed').checked) {
    $('span.worktype').empty().append('fixed price')
  }
});
});

$(document).ready(function() {
$('#generate').click(function(){
          $("span, p").each(function() {
    var text = $(this).text();
    text = text.replace(". we", ". We");
        text = text.replace(". we'll", ". We'll");
     text = text.replace(". we're", ". We're");
     text = text.replace(". us", ". Us");
     text = text.replace(". our", ". Our");
     text = text.replace(". my", ". My");
    $(this).text(text);
     $('div.form').hide();
     $('div.contract').show();
   });
});  
});





 

