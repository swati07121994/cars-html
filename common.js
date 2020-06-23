$(document).ready(function(){
    $(".tile").hover(function(e){
        $(this).find(".detailed-information").toggleClass("hide bg-blur");
        $(this).find(".pic-counts, .details").toggleClass("hide");
        $(this).find(".cost,.country").toggleClass("low-opacity");
        
    });
});