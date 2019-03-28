$("button").click(function(){
    var age = $(".old").val();
    var mood = $(".life").val();
    var everything = $(".everything");
     
    console.log(age,mood);
     
    if (age>18 && mood==="fighter" ) {
        everything.text('maybe its time to take a break');
    }
     
});

