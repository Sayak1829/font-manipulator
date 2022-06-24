
leftWrist = 0;
rightWrist = 0;

difference = 0;
function setup(){
     video = createCapture(VIDEO);
     video.size(500,500);

     canvas = createCanvas(500,500);
     canvas.position(560,150);

     posenet = ml5.poseNet(video,Modelloaded);
     posenet.on('pose',gotposes);


}

function Modelloaded(){
    console.log("posenet is initiaized");
}
function gotposes(results){
if(results.length > 0){
   console.log(results);
   leftWrist = results[0].pose.leftWrist.x;
   rightWrist = results[0].pose.rightWrist.x;
   difference = floor(leftWrist - rightWrist);
   console.log("Left Wrist = " + leftWrist + "Right Wrist" + rightWrist + "Difference = " + difference);
}
}
function draw(){
    background("ghostwhite");
   document.getElementById("square").innerHTML="Font size of the text will be" + difference + "px";
   fill("red");
   textSize(difference);
   text("Sayak Bhowmik",50,400);
   


}
