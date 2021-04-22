window.onload = () => {}


var ctx = document.getElementById('canvas').getContext('2d'); 

canvas.width = 700;
canvas.height = 600;




// BASE 

ctx.fillStyle = "#D1E3DD";
ctx.fillRect(200, 200, 300, 200);


// PORTE

ctx.fillStyle = "#798071";
ctx.fillRect(325, 275, 50, 125);

// FENÊTRE DE GAUCHE

ctx.fillStyle = "skyblue";
ctx.fillRect(225, 275, 50, 50);

// BORD FENÊTRE

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(250, 275 );
ctx.lineTo(250, 325);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(225, 300);
ctx.lineTo(275, 300);
ctx.stroke();

// FENÊTRE DE DROITE

ctx.fillStyle = "skyblue";
ctx.fillRect(425, 275, 50, 50);

// FENÊTRE

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(425, 300);
ctx.lineTo(475, 300);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(450, 275);
ctx.lineTo(450, 325);
ctx.stroke();

// TOIT

ctx.beginPath();
// ctx.strokeStyle = "black";
ctx.fillStyle = "slategray";
ctx.moveTo(200, 200);
ctx.lineTo(350, 75);
ctx.lineTo(500, 200);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.fill();

// POIGNEE DE PORTE

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "#F5CAC3";
ctx.arc(335,335,5, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

// PELOUSE

var grd=ctx.createLinearGradient(0, 350, 700, 600);
  grd.addColorStop(0,"#363636");
  grd.addColorStop(1,"#242F40");
  ctx.fillStyle=grd;
  ctx.fillRect(0, 400, 700, 600);
  
  // LUNE
  
  ctx.beginPath();
ctx.strokeStyle = "#E5E5E5";  
  ctx.fillStyle = "#E5E5E5";
  ctx.arc(600,100,50,0,2*Math.PI);
  ctx.stroke();
  ctx.fill();
  
  

  // CHEMINEE

ctx.beginPath();
ctx.strokeStyle = "#798071";
ctx.fillStyle = "#798071";
ctx.moveTo(415, 130);
ctx.lineTo(415, 90);
ctx.lineTo(445, 90);
ctx.lineTo(445, 155);
ctx.lineTo(415, 130);
ctx.stroke();
ctx.fill();
