let scribs = [];
let scri_num = 25;
let s;
var scribble = new Scribble();
let pos = 400;
let a = 0
let fire;

function setup(){
    createCanvas(1400, 750);
    background(0);
    fire = loadImage('fire.jpg');
}

function draw(){
    background(a);
    if((keyIsPressed == true) && (key == '0')){
        background(fire);
        textSize(50);
        text('METEOR SHOWER', 600, pos)
    }
    for(let i=0; i<scribs.length; i++){
    scribs[i].display();
    scribs[i].move();
    scribs[i].recter(mouseX, mouseY);
}
}

function keyPressed(){
    let s = new Scrib(mouseX, mouseY, 50, 50);
    scribs.push(s);  
}

function mouseWheel(event) {
    pos += event.delta;
  } 


class Scrib{
    constructor(tempX, tempY, tempW, tempH, tempXSpeed, tempYSpeed, tempShade){
       this.x = tempX; 
       this.y = tempY;
       this.w = tempW;
       this.h = tempH;
       this.xspeed = tempXSpeed;
       this.yspeed = tempYSpeed;
       this.shade = tempShade
       this.over = 5;
       this.keyclicked = false;
    }
     
    
    recter(mx, my){
        let d = dist(mx, my, this.x, this.y);
        //mx and my are mousepositions
        if(d<this.w){
            this.over = true;
        }
        else{
            this.over = false;
        }
        }

    move(){
        let speed = random(0, 3);
        this.y += speed;
        if(this.y > height){
            this.y = 0;
        }
        this.x += random(0.4);
        if(this.x > width){
            this.x = 0;
    }
}

    display(){
        if((keyIsPressed == true) && (key == 'R')){
            fill(255, 0, 0);
        }
        if ((keyIsPressed == true) && (key == 'B')){
            fill(0, 0, 255);
        }
        if((keyIsPressed == true) && (key == 'Y')){
            fill(255, 255, 0);
        }
        if((keyIsPressed == true) && (key == 'S')){
            fill(255, 255, 0);
        }
        ellipse(this.x, this.y, this.w, this.h);
        if(this.over){
            rectMode(CENTER);
            scribble.roughness = 3;
            //scribble.numEllipseSteps = 7;
            scribble.scribbleEllipse(this.x, this.y, this.w*1.5, this.h*1.5);
        }
    }
}