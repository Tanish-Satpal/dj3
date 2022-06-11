song = "";
song2="";
song3="";
leftWristX=0;
leftWristY=0;
rightWristY=0;
rightWristX=0;

function preload(){
    song= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
    song3= loadSound("music3.mp3");
}

function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function play1(){
    song.play();
    song.setVolume(1);
    song.rate(1);                    
}

function play2(){
    song2.play();
    song2.setVolume(1);
    song2.rate(1);                    
}

function play3(){
    song3.play();
    song3.setVolume(1);
    song3.rate(1);                    
}

function pause(){
    song.pause();
    song2.pause();
    song3.pause();                    
}

function stop(){
    song.stop();      
    song2.stop();
    song3.stop();              
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left x="+leftWristX+" left Y="+leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right x="+rightWristX+" right Y="+rightWristY);
    }
}