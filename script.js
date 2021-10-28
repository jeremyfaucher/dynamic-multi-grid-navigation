$(document).ready(function(){
    $(".grid-single").click(function () {
        $("div.multi").removeClass("col-lg-4 col-md-4 col-sm-4").addClass('col-lg-12');
    });
    $(".grid-multi").click(function () {
        $("div.multi").removeClass("col-lg-12").addClass('col-lg-4 col-md-4 col-sm-4');
    });
});
