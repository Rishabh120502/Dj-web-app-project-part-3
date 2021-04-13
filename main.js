function preload(){
song = loadSound("music.mp3");
song2 = loadSound("music2.mp3") 
}

song = "";
song2 = "";

function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO)
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
console.log("rishabh");
poseNet.on('pose', gotPoses);
}


function draw(){
image(video,0,0,600,500);
}

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;



function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log('Left wrist X = ' + leftWristX+ "left wrist y =" + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log('right wrist x ='+ rightWristX + "right wrist y = "+ rightWristY);
}
}

function modelLoaded(){
    console.log("POSENET IS INITIALISED")
}



