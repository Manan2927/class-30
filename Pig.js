class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255; // 0 stands for the invisibility,126 stands for 50% visibility,
  }

  display(){

    console.log(this.body.speed);

    if(this.body.speed<3){//if condition is true

     
      super.display();


    }
    else{ // if condition is false

     //remove the pig

     World.remove(world,this.body);
     push();
     this.visibility=this.visibility-5;  //255-5,250-5,245-5,so on
     tint(0,153,204,this.visibility);
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop();

    }



  }

};