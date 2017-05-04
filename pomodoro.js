$( document ).ready(function() {
  
  var minutes = 25;
  
  function controls () {
  
    $('#minutes').text(minutes);
    
    $('#down').click(function down () {
      console.log(minutes);
      var minutes = minutes - 1;
      $('#minutes').text(minutes);
    });
    
    $('#up').click(function down () {
      console.log(minutes);
      var minutes = minutes + 1;
      $('#minutes').text(minutes);
    });    
    
  };
  
  controls ();
  

  
  $('#start').click(function endTime () {
    setInterval(function() {
      var now = new Date();
      var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

      var totalDiff=(later-now);
      console.log(totalDiff);
      
      var minuteDiff = Math.floor(totalDiff/60000);
      console.log(minuteDiff);
      
      var secondDiff = Math.floor((60000-(1500000-totalDiff))/1000);
      console.log(secondDiff + 'seconds');
    
      $('#remaining').text(minuteDiff + ':' + secondDiff + ' seconds remaining.');
      
    }, 1000);
    
    var start = new Date();
    var time = start.getHours() + ':' + start.getMinutes() + ':' + start.getSeconds();
    console.log (time);

    var later = new Date(start.getTime() + minutes*60000);
    var timeLimit = later.getHours() + ':' + later.getMinutes() + ':' + later.getSeconds();
    console.log (timeLimit);
    
    $('#future').text('Finish Time:' + timeLimit);
    
  });
  
});

