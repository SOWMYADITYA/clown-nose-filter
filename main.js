function setup(){
    Canvas=createCanvas(500,500);
    Canvas.center();
    video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modelloaded); 
posenet.on('pose',gotresult);
}
function clickimage(){
    save('image1.png');
}
function draw(){
    image(video,0,0,500,500);
}
function modelloaded(){
    console.log("model is loaded");
}
function gotresult(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}