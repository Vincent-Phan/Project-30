class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.visibility=255;
      this.image= loadImage("block.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<2.5){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 30, 40)
         }
else{
      World.remove(world,this.body)
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility)
      image(this.image, this.body.position.x, this.body.position.y, 30, 40)
      pop();
}
    }
}