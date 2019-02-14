let balls = [];
let balls_num = 25;
let b;
let angle = 90;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw(){
    background(0);
    for(let i=0; i<balls.length; i++){
    balls[i].display();
    balls[i].move();
    balls[i].rollover(mouseX, mouseY)
}
    if(balls.length > 130){
        balls.splice(0,1);
    }
}

function mouseDragged(){
    let b = new Ball(mouseX, mouseY, 40, 40);
    balls.push(b);
    for(let i=0; i<balls.length; i++){
        balls[i].clicked(mouseX, mouseY);
    }
}

class Ball{
    constructor(tempX, tempY, tempW, tempH, tempXSpeed, tempYSpeed, tempShade){
       this.x = tempX; 
       this.y = tempY;
       this.w = tempW;
       this.h = tempH;
       this.xspeed = tempXSpeed;
       this.yspeed = tempYSpeed;
       this.shade = tempShade
       this.over = false;
       this.isclicked = false;
    }


    rollover(mx, my){
        let d = dist(mx, my, this.x, this.y);
        //mx and my are mousepositions
        if(d<this.w){
            this.over = true;
        }
        else{
            this.over = false;
        }
        }
    
    clicked(mx, my){
        let d = dist(mx, my, this.x, this.y);
        if(d<this.w){
            this.isclicked = true;
        }
        else{
            this.isclicked = false;
        }
        }
    

    move(){
        let speed = .1;
        this.y += speed;
        if(this.y > height){
            this.y = 0;
    }
}

    display(){
        if(this.over){
            fill(255, 0, 0);
        }
        else{
            fill(255);
        }
        if(this.isclicked){
            fill(0,0,255);
        }
        rect(this.x, this.y, this.w, this.h);
    }
}