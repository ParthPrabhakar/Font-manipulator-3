function setup(){
    canvas=createCanvas(550,550);
    canvas.position(1500,150);

    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("grey");
    textSize(difference);
    fill("blue");
    text("Parth Prabhakar",20,200);

}
function modelLoaded(){
    console.log("Posenet initialized");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX= "+leftWristX+" rightWristX= "+rightWristX+" difference= "+difference);
    }

}

var leftWristX=0;
var rightWristX=0;

var difference=0;
