class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoky = loadImage("sprites/smoke.png");

    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>230 && this.body.velocity.x>5){
  
      var pos=[this.body.position.x,this.body.position.y]
   
      this.trajectory.push(pos)


    }
   
   //console.log(this.trajectory)
   for(var i = 0 ;i<this.trajectory.length;i=i+1){
  image(this.smoky,this.trajectory[i][0],this.trajectory[i][1]);


   }
   
  }
}
