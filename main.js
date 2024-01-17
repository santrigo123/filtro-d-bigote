nose_x=0;
nose_y=0;
function preload(){
    tamal=loadImage('https://i.postimg.cc/jdFvY39h/bigote.png');
}
function setup(){
    canvas=createCanvas(550,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,400);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotPoses);
}
function model_loaded(){
    console.log("poseNet se esta activando");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nariz en x"+results[0].pose.nose.x);
        console.log("nariz en y"+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-25;
        nose_y=results[0].pose.nose.y;
    }
}
function draw(){
    image(video,0,0,550,400);
    image(tamal, nose_x,nose_y ,50,50);
}
function take_snapshot(){
    save('mi_foto.png');
}