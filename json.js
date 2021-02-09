$().ready(function(){
    $.getJSON( "https://github.com/krishna1831/kp.github.io/blob/main/data.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});
