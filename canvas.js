var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

for(var x=0; x<=3000; x+=1){

    var y = 180 + Math.sin(0.8 * x / 180) * 90;

    console.log('y :', y);
    
    //y = 20

    ctx.lineTo(x - 20 ,y -20);
}
ctx.fillStyle = "#F7F9FB";
//ctx.fillStyle = "red";
ctx.fill();