noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
differnce = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 550);
    video.position(100, 100);

    canvas = createCanvas(550, 500);
    canvas.position(750,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
} 

function draw(){
    background('grey');
    fill('lightgrey');
    stroke('lightgrey');
    textSize(differnce);
    text('Ananya', noseX, noseY);
    document.getElementById("sideSquare").innerHTML = "Size of the text will be = " + differnce + "px";
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differnce = floor((leftWristX - rightWristX) / 5);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "differnce = " + differnce);
    }
}