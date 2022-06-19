clownpierce = "";
undertale = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function preload()
{
    song1 = loadSound("Clownpierce.mp3");
    song2 = loadSound("Undertale.mp3");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightwristY = " + rightWristY);
    }
}

function play1()
{
    if(playing = "2")
    {
        song1.stop();
        song2.stop();
    }
    song1.play();
    playing = "1";
}

function play2()
{
    if(playing = "1")
    {
        song1.stop();
        song2.stop();
    }
    song2.play();
    playing = "2";
}