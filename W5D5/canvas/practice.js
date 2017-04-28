document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById('myCanvas');
  canvas.width = 500;
  canvas.height = 500;

  let ctx = canvas.getContext("2d");
  ctx.fillStyle = 'yellow';
  ctx.fillRect(0, 0, 500, 500);
  ctx.beginPath();
  ctx.arc(200, 200, 50, 0, 2*Math.PI);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
  // ctx.beginPath();
  // ctx.arc(100,100, 10, 0, Math.PI*2);
  // ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
  ctx.stroke();

  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(75,125);
  ctx.lineTo(75,250);
  ctx.stroke();
});
