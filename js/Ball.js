class Ball {
    constructor(x, y, width, height) {
      var options = {restition: 0.8};

      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      fill("#676e6a");
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
}
  