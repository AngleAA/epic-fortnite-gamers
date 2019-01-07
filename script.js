$("#criminal").click(function(){
 $("#criminal").hide();
 $("#criminal2").hide();
 $("#intel").show();
 $("#intel2").show();
});

$("#intel").hover(function(){
 $("#intel").hide();
 $("#intel2").hide();
 $("#door").show();
 $("#door2").show();
 $("#open").show();
});

$("#open").click(function(){
 $("#door").hide();
 $("#door2").hide();
 $("#dog").show();
 $("#dog2").show(); 
 $("#open").hide();
});

$("#dog").click(function(){
 $("#dog").hide();
 $("#dog2").hide();
 $("#sleepingdog").show();
 $("#John").show();
 $("#guntime").show();
});

$("#John").click(function(){
 $("#John").hide();
 $("#sleepingdog").hide();
 $("#guntime").hide();
 $("#victoryroyale").show();
 $("#victoryroyale").delay("15000").fadeOut("slow");
 $("#purpleman").delay("15500").fadeIn("slow");
});







