/**
 * Created by wayne on 15/8/21.
 */
function jumpHome() {
    $("#mainBody").load("./main/Home.html", function () {
        $("#mainBody").fadeIn("slow");
    });
}

$(document).ready(function () {
    var MainBody = $("#mainFont");
    MainBody.animate({opacity: 0.2}, "slow");
    MainBody.animate({paddingTop: '20%'}, "slow");
    MainBody.animate({opacity: 1}, "slow");
});