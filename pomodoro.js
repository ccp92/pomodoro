$( document ).ready(function() {
  
  var minutes = 25;
  
  $("#start").click(function endTime () {
    setInterval(function() {
      var now = new Date();
      var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

      var hourDiff = (later - now)/60000;
      console.log(hourDiff);
    
      $("#remaining").text(hourDiff + " remaining");
      
    }, 1000);
    

    
    var start = new Date();
    var time = start.getHours() + ':' + start.getMinutes() + ':' + start.getSeconds();
    console.log (time);

    var later = new Date(start.getTime() + 25*60000);
    var timeLimit = later.getHours() + ':' + later.getMinutes() + ':' + later.getSeconds();
    console.log (timeLimit);
    
    $('<p>Finish Time: ' + timeLimit + '</p>').appendTo('#future');
    

    
    
  });
  
});

