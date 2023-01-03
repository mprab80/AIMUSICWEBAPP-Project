song1=" ";
song2=" ";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function gotPoses(results){
    if (results > 0){   

        leftwristx=results[0].pose.leftWrist.x
        lefttwristy=results[0].pose.leftWrist.y
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y
        console.log(results);
   } 
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function draw(){
    image(video, 0, 0, 600, 500);
}