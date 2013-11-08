function dom_init() {

    
    window.addEventListener( 'keydown', down, false );
    

    
    $("#teams #home").click(function () {
        var audio = new Audio("wrong.mp3");
        audio.play();
        $("#home span").append("X");
        
    });
    
    $("#teams #guest").click(function () {
        var audio = new Audio("wrong.mp3");
        audio.play();
        $("#guest span").append("X");
    });
    
    $("ol li").click(function () {
    
        
        var audio = new Audio("reveal.mp3");
        audio.play();
        
        $(this).text($(this).attr("rel").substr(0,i));
        
        for(var i=0;i<29-$(this).attr("rel").length;i++) {
            $(this).append("&nbsp;");
        }
        $(this).append("&nbsp;");

        var digit = $(this).attr("rev");
         if (digit < 9) {$(this).append("&nbsp;");}
        
        $(this).append($(this).attr("rev"));
        
        
    });
    
    $("h1").click(function() {
        var audio = new Audio("intro.wav");
        audio.play();
    });

}

function nextQ () {
    resetX();
    var counter = $("ol.active").attr("id").substr(5);
    $("#frage"+counter).removeClass("active");
    counter++;
    $("#frage"+counter).addClass("active");
    $("#counter").text(counter);
    var audio = new Audio("runde.wav");
        audio.play();
    
}
function resetX() {
    $("#points #home span").text("");
    $("#points #guest span").text("");
            
}




function down ( event ) {
    //event.preventDefault();
    console.log(event.keyCode);
    
    if (event.keyCode == 81) {
        reveal(1);
    } else if (event.keyCode == 87) {
        reveal(2);
    } else if (event.keyCode == 69) {
        reveal(3);
    } else if (event.keyCode == 82) {
        reveal(4);
    } else if (event.keyCode == 84) {
        reveal(5);
    } else if (event.keyCode == 90) {
        reveal(6); 
    } else if (event.keyCode == 88) {
         $("#teams #home").click();
    } else if (event.keyCode == 67) {
        $("#teams #guest").click();
    } else if (event.keyCode == 32) {
        nextQ();
    }
    
}


function reveal (i) {

        $("ol.active li:nth-child("+i+")").click();        
}

