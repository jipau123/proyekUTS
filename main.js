var myCanvas    = document.getElementById('myCanvas');
var ctx         = myCanvas.getContext('2d');
myCanvas.width  = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

 /**
  * iki fungsi gelas
  * 
  * @param {*} x        =>  menentukan titik x bre (start x)
  * @param {*} y        =>  start e y
  * @param {*} lebar    =>  lebar persegine
  * @param {*} tinggi   =>  tinggi persegi
  * @param {*} warna1   =>  warna gae gradasi seng pertama
  * @param {*} warna2   =>  wana seng kedua
  */
function gelas(x, y, lebar, tinggi, warna1, warna2) {
    let lGrad = ctx.createLinearGradient(x, y-40, x, y+150)
    lGrad.addColorStop(0.3, warna1);
    lGrad.addColorStop(0.7, warna2);
    ctx.fillStyle = lGrad;
    ctx.fillRect(x, y, lebar, tinggi);
    ctx.save();
}

// pembuatan gelas
gelas(340, 150, 140, 200, "#FF3E78", "#000035");
gelas(600, 150, 140, 200, "#FF3E78", "#000035");
gelas(860, 150, 140, 200, "#FF3E78", "#000035");

// tutup 1

ctx.fillStyle = '#000035';
ctx.translate(0, 0);
ctx.rotate(0 * Math.PI / 180);
ctx.fillRect(340, 130, 140, 20);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(340, 130, 140, 20);
ctx.fillStyle = '#000035';

ctx.fillRect(400, 115, 15, 15);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(400, 115, 15, 15);
ctx.save();


// tutup 2
ctx.fillStyle = '#000035';
ctx.translate(290, -107);
ctx.rotate(40 * Math.PI / 180);
ctx.fillRect(370, -112, 140, 20);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(370, -112, 140, 20);

ctx.fillStyle = '#000035';
ctx.fillRect(435, -127, 15, 15);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(435, -127, 15, 15);
ctx.save();
// tutup3
ctx.fillStyle = '#000035';
ctx.translate(290, -107);
ctx.rotate(50 * Math.PI / 180);
ctx.fillRect(12, -419, 140, 20);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(12, -419, 140, 20);
ctx.fillStyle = '#000035';
ctx.fillRect(800, 235, 10, 10);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.save();
ctx.restore();
ctx.fillStyle = '#000035';
ctx.fillRect(75, -435, 15, 15);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(75, -435, 15, 15);
