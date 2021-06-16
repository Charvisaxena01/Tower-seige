const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var image,backgroundImg;
var bg= "bg2.jpeg";
function preload(){
  getTime()
  polygon_img = loadImage("polygon.png")
}
function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
  score = 0
  ground = new Ground(0,587,2999,20)
  base = new Ground(620,406,360,20)
  base2 = new Ground(1071,231,265,20)

 //7
  box3 = new Box(702,392,50,50)
//6
  box4 = new Box(663,392,50,50)
  //5
  box5 = new Box(643,392,50,50)
  //4
  box6 = new Box(622,392,50,50)
  //3
  box7 = new Box(602,392,50,50)
  //2
  box8 = new Box(575,392,50,50)
//11
  box9 = new Box(650,348,50,50)
  //10
  box10 = new Box(605,348,50,50)
  //1
  box11 = new Box(460,348,50,50)
  //9
  box12 = new Box(587,348,50,50)
//8
  box13 = new Box(563,348,50,50)
  //12
  box14 = new Box(683,348,50,50)
  //14
  box15 = new Box(612,294,50,50)
  //15
  box16 = new Box(665,294,50,50)
//13
  box17 = new Box(559,294,50,50)
  //16
  box18 = new Box(613,247,50,50)
  //1.2
  box19 = new Box(1000,220,50,50)
  //6.2
  box20 = new Box(1030,220,50,50)
  //3.2 
  box21 = new Box(1050,220,50,50)
  //4.2
  box22 = new Box(1099,220,50,50)
  //5.2
  box23 = new Box(1145,220,50,50)
  //2.2
  box24 = new Box(1030,220,50,50)
  //7.2          
  box25 = new Box(1050,220,50,50)
  //8.2
  box1 = new Box(1090,165,50,50)
  //9.2
  box2 =  new Box(1055,122,50,50)


  polygon = Bodies.circle(94,216,50,40)
  
  World.add(world,polygon)


  slingShot = new SlingShot(polygon,{x:100,y:200})


}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  //noStroke()
  textSize(35)
  fill("white")
  text("Score  " +score,80,80)

    Engine.update(engine);
    strokeWeight(4);

  ground.display();
  base.display()
  base2.display()
  box1.display()
  box1.score();
  box2.display()
  box2.score();
  box3.display()
  box3.score();
  box4.display()
  box4.score();
  box5.display()
  box5.score();
  box6.display()
  box6.score();
  box7.display()
  box7.score();
  box8.display()
  box8.score();
  box9.display()
  box9.score();
  box10.display()
  box10.score();
  box11.display()
  box11.score();
  box12.display()
  box12.score();
  box13.display()
  box13.score();
  box14.display()  
  box14.score();
  box15.display()
  box15.score();
  box16.display()
  box16.score();
  box17.display()
  box17.score();
  box18.display()
  box18.score();
  box19.display()
  box19.score();
  box20.display()
  box20.score();
  box21.display()
  box21.score();
  box22.display()
  box22.score();
  box23.display()
  box23.score();
  box24.display()
  box24.score();
  box25.display()
  box25.score();
  slingShot.display()
 circle(polygon.position.x,polygon.position.y,52,50)
 imageMode(CENTER)
 image(polygon_img,polygon.position.x,polygon.position.y,80,80)
  drawSprites()
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly()
}
function keyPressed(){
  if(keyCode === 32){
   // alert("HI")
    slingShot.attach(this.polygon);
  }
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json()
  console.log(responseJSON)
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13)
  if(hour>06&&hour<=18){
    bg = "bg2.jpeg"
  }
  else{
    bg = "bg1.jpeg"
  }
  backgroundImg = loadImage(bg);
}
