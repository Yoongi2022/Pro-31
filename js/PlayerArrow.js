class PlayerArrow {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    //Escribe un código para definir una matriz llamada trayectoria
    this.trajectory = []
    
    World.add(world, this.body);
  }
  shoot(archerAngle) {
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      if (this.body.velocity.x > 0 && this.body.position.x > 400) {
        var position = [this.body.position.x, this.body.position.y];
        /****Escribe un código correcto para agregar la posición actual
         de la flecha a la matriz de trayectoria **/
        

         //A la matriz de trajectory se le añadirá posición
         this.trajectory.push(position)
      }
      
      
  

      /****Escribe un código correcto para agregar un loop for y mostrar pequeños 
      puntos en todas las posiciones almacenadas en la matriz*******/
      for (var i = 0; i < this.trajectory.length; i ++){
        ellipse(this.trajectory[i][0], this.trajectory[i][1],5,5);
      }
  }
}