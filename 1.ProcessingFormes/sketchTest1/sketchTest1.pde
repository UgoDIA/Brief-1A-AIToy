void setup() {
  size(64,64);
}
void draw() {
  
  for (int i=0; i < 3; i++){
     background(255);
    pushMatrix();
    strokeWeight(random(0.5,3));
    float r = random(8,24);
    float x = random(r,width-r);
    float y = random(r,height-r);
    stroke(random(255),random(255),random(255));
    translate(x,y);
    if (i==0){
    circle(0,0, r*2);
    saveFrame("data/cercle####.png");
    } else if (i==1){
      rectMode(CENTER);
      rotate(random(-0.1,0.1));
      square(0,0,r*2);
      saveFrame("data/carré####.png");
    } else if (i==2) {
      rotate(random(-0.1,0.1));
      triangle(0,-r,r,r,-r,r);
      saveFrame("data/triangle####.png");
    }
    popMatrix();  
  } 
  
  if (frameCount ==100){
    exit();
  }
}
