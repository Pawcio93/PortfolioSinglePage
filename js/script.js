
$(window).ready(updateHeight);
$(window).resize(updateHeight);
$(window).resize(updateHeight2);
function updateHeight()
{
    var div = $('.hobby');
    var width = div.width();
    div.css('height', width);
}
function updateHeight2()
{
    var div = $('.hobbyOnClick');
    var width = 0.7262*div.width();
    div.css('height', width);
}

var chooseHobby = function()
{
    $(this).addClass('hobbyOnClick').removeClass('hobby firstInLine hobbyImg');
    $('.hobbyImg').hide();
    $('.hobby').css('display', 'none');
    updateHeight2();

    var id = this.id;

    if (id == 'sport')
        {
           if(document.getElementById("gym"))
           {
               return;
           }
           else
           {
           $('#sport').append('<img id="runmaggedon" src="img/runmaggedon.jpg" alt="runmaggedon" />');
           $('#sport').append('<img id="gym" src="img/gym.jpg" alt="gym" />');
           $('#sport').append('<div class="sportText">\n\
            <p>Runmaggedon is my hobby for over a year, it is challenging, hard and the people and athmosphere there is just great. For now my best distance is 24 km in mountain terrain, but it was not my last word! </p>\n\
            \n\
            </div>');
           $('#sport').append('<div class="sportText"><p>Working out is something that I&#39m doing since studies. It is became the part of my daily routine, I love to work with my body and see physical ad power progress. Gym also help with self-discipline and well-being </p></div>');
           $('#sport').append('<div id="cancel"><p>CANCEL</p></div>');
           }
        }
    else if (id == 'travel')
        {
              alert("travel");
        }
    else if (id == 'objectivism')
        {
              alert("objectivism");
        }
    else if (id == 'engineering')
        {
              alert("engineering");
        }
    else if (id == 'programming')
        {
              alert("programming");
        }
    else if (id == 'economy')
        {
              alert("economy");
        }

$("#cancel").bind("click", function()
{
   alert("function start");
   $(".hobby").unbind("click", chooseHobby);
});


};

$(document).ready(function()
{
    $(".hobby").bind('click', chooseHobby);
 

});
