song1="";
song2="";
song1_status="";
song2_status="";
scorerightwrise = 0;
scoreleftwrist  =0;
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;



function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture (VIDEO);
    video.hide();
     
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses)
}
function draw(){
    image(video, 0,0,600,500);

    song1_status = song1.isplaying();
    song1_status = song1.isplaying();

    fill("#FF0000")
   stroke("#FF0000")

if(scorerightwrise >0.2)
{
    circle(rightWristX,rightWristY,20);
    song2.stop();

    if(song1_status == false)
    {
        song1.play();
        document.getElementById('song').innerHTML =" playing - harry potter theme song"
    }
}
if(scoreleftwrise >0.2)
{
    circle(rightWristX,rightWristY,20);
    song1.stop();

    if(song2_status == false)
    {
        song2.play();
        document.getElementById('song').innerHTML =" playing - peterpan theme song"
    }
}
}

 function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
 }

function play(){
song.play();
song.setVolume(1);
song.rate(1);

 }
 
 function modelLoaded(){
    console.log('posenet is intialized')
 }

 function gotPoses(results)
 {
    if(results.length > 0)
    {
        console.log(results);

        scorerightwrise = results[0].pose.keypoints[10].score;
        scoreleftwrise = results[0].pose.keypoints[9].score;
        console.log("scorerightwrise = "+rightWristX +" scoreleftwrise ="+ scoreleftwrise);


        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " +leftWristX + " leftWristY = " + leftWristY)
    
    rightWristX = results[0].pose,rightWrist.x;
    rightWristY = results[0].pose,rightWrist.y;
    console.log("rightWristX = " +rightWristX + " rightWristY = " + rightWristY)
    }
 }