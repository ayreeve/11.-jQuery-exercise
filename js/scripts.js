// jslint devel: true

// modifying CSS
var $span = $('span');

$("span:even").css('color', 'red');

//or: 
/* $span.each(function(index, element) {
	if(index % 2 == 1) {
		$(element).css('color', 'red');
	};
}); */


// adding new elements
var $paragraphs = $('p');
$paragraphs.each(function (index, element) {

    var $button = '<button class="btn" data-index="' + index + '">Click me</button>'
    $(this).append($button)

});


// adding event handlers
$("button").click(function () {
    alert($(this).attr("data-index"));
});
