$( document ).ready(function() {
  
  $("#start").click(function endTime () {
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.log (time);

    var today25 = new Date(today.getTime() + 25*60000);
    var timeLimit = today25.getHours() + ':' + today25.getMinutes() + ':' + today.getSeconds();
    console.log (timeLimit);
    
  });
  
});

