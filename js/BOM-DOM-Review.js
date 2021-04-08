//Todo: Let's make make a button that will double in size when clicked
$('#changeBoxSize').click(function (){
    // $('#box').css("height");
    // $('#box').css('width');
        $('#box').css("height,500px");
        $('#box').css("height,500px");
});

var instructions = function (e){
        if($("#box").hasClass("toggleClass1")){
                $("#box").toggleClass("toggleClass2")
        } else {
                $("#box").toggleClass("toggleClass1")
        }
}

$("#toggleClass").click(instructions)



console.log('hello')