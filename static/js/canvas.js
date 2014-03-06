$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  $('#p1').click(function() {
 context.strokeRect(1, 1, 2, 10);
  });

  $('#p2').click(function() {
 context.strokeRect(5, 5, 4, 4);
  });     
  });     

