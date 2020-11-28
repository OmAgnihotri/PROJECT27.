const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  createCanvas(1600,400);
wall=new Roof(800,100,1200,30);
}

function draw() {
  background(0);  
wall.display();
 
}