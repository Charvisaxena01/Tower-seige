class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visiblity = 255

    //this.image = loadImage("sprites/wood1.png");
    //this.body = Bodies.rectangle(x, y, width, height);

  }

    display(){  
  if((this.body.speed)<4){
  var pos =this.body.position;
  rectMode(CENTER)
  fill("yellow")
  //console.log(this.body.speed)
  rect(pos.x, pos.y, this.width, this.height);
  //super.display();
  }

  else{
    World.remove(world,this.body);
    push()
    this.Visiblity = this.Visiblity-5;
    tint(255,this.Visiblity)
pop();
  }
    }
score(){
 if(this.Visiblity<0 && this.Visiblity> -1005){
   score++;
 }
}
};
