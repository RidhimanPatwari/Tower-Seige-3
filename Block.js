class Block {
  constructor(x, y, width, height, color) {
      var options = {
          'restitution':0.4,
          'friction':0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.visibility = 225
      World.add(world, this.body);
    }
    display(){
      push()
      var angle = this.body.angle;
      if (this.body.speed < 1) {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world, this.body);
        this.visibility = this.visibility - 5;
        tint(255,this.visiblity);
        console.log(this.visibility);
      }
      pop()
    }
}