var img;
var vid;
var theta = 0;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  vid = createVideo(['assets/thetaSphere2.mp4']);
  vid.loop();
  vid.hide();
}

function draw(){
  background(10);
  ambientMaterial(250);
  orbitControl();  
    rotateY(theta);
    //pass image as texture
    texture(vid);
    sphere(250);
  theta += 0.00097;
}
