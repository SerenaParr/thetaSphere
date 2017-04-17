var img;
var vid;
var theta = 0;

function setup(){
  createCanvas(375, 375, WEBGL);
  vid = createVideo(['assets/thetaSphere2.mp4']);
  vid.loop();
  vid.hide();
}

function draw(){
  background(10);
  orbitControl();  
    rotateY(theta);
    //pass image as texture
    texture(vid);
    sphere(175);
  theta += 0.00097;
}
