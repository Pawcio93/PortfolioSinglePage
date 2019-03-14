
$(window).ready(updateHeight);
$(window).resize(updateHeight);
$(window).resize(updateHeight2);

// update hobby containers height when resize
function updateHeight()
{
    var div = $('.hobby');
    var width = div.width();
    div.css('height', width);
}
// update hobbyOnClick containers height when resize
function updateHeight2()
{
    var div = $('.hobbyOnClick');
    var width = 0.7262*div.width();
    div.css('height', width);
}


// Function which creates content of each hobby element
var chooseHobby = function()
{
    $(this).addClass('hobbyOnClick').removeClass('hobby firstInLine');
    $('.hobbyImg').hide();
    $('.cancel, .sportImg, .sportText').show();
    $('.sportImg, .sportText').css('display', 'inline-block');
    $('.hobby').css('display', 'none');
    updateHeight2();

};

// Function which close hooby section
var closeHobby = function()
{
    alert("function start");
    $(this).parent().addClass('hobby firstInLine').removeClass('hobbyOnClick');
    $(this).siblings('.hobbyImg').show();
    $(this).siblings('.cancel, .sportImg, .sportText').hide();
    $(this).siblings('.hobby').css('display', 'inline-block');
    updateHeight2();

};


$(document).ready(function()
{
    $(".hobby").on('click', chooseHobby);
    $(".cancel").on('click', closeHobby);

});
