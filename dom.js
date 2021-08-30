var engine = Matter.Engine.create();
var render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    height: 1000,
    width: 1200,
    background: "jesus.png",
    wireframes: false
  }
});
var rec = Matter.Bodies.rectangle(300, 600, 900, 50, { isStatic: true });
//var dom = Matter.Composites.stack(280, 580, 10, 1, 5, 0, function(x, y) {
//  return Matter.Bodies.rectangle(x, y, 10, 100);
//});
var stack = Matter.Composites.stack(50, 480, 20, 1, 10, 0, function(x, y) {
  return Matter.Bodies.rectangle(x, y, 20, 100);
});
//stack.bodies[0].density = 0.01;
stack.bodies[0].label = "player";
stack.bodies[0].render.sprite.texture = "b.png";
stack.bodies[0].render.sprite.xScale = 1 / 3;
stack.bodies[0].render.sprite.yScale = 1.5;
stack.bodies[2].render.sprite.texture = "b.png";
stack.bodies[2].render.sprite.xScale = 1 / 3;
stack.bodies[2].render.sprite.yScale = 1.5;
stack.bodies[4].render.sprite.texture = "b.png";
stack.bodies[4].render.sprite.xScale = 1 / 3;
stack.bodies[4].render.sprite.yScale = 1.5;
stack.bodies[6].render.sprite.texture = "b.png";
stack.bodies[6].render.sprite.xScale = 1 / 3;
stack.bodies[6].render.sprite.yScale = 1.5;
stack.bodies[8].render.sprite.texture = "b.png";
stack.bodies[8].render.sprite.xScale = 1 / 3;
stack.bodies[8].render.sprite.yScale = 1.5;
stack.bodies[10].render.sprite.texture = "b.png";
stack.bodies[10].render.sprite.xScale = 1 / 3;
stack.bodies[10].render.sprite.yScale = 1.5;
stack.bodies[12].render.sprite.texture = "b.png";
stack.bodies[12].render.sprite.xScale = 1 / 3;
stack.bodies[12].render.sprite.yScale = 1.5;
stack.bodies[14].render.sprite.texture = "b.png";
stack.bodies[14].render.sprite.xScale = 1 / 3;
stack.bodies[14].render.sprite.yScale = 1.5;
stack.bodies[16].render.sprite.texture = "b.png";
stack.bodies[16].render.sprite.xScale = 1 / 3;
stack.bodies[16].render.sprite.yScale = 1.5;
stack.bodies[18].render.sprite.texture = "b.png";
stack.bodies[18].render.sprite.xScale = 1 / 3;
stack.bodies[18].render.sprite.yScale = 1.5;
var rec2 = Matter.Bodies.rectangle(20, 500, 20, 20, {
  isStatic: true,
  label: "object"
});
rec2.render.sprite.texture = "bell.jpg";
rec2.render.sprite.xScale = 1 / 8;
rec2.render.sprite.yScale = 1 / 8;

var mouse = Matter.Mouse.create(render.canvas),
  mouseconstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: { stiffness: 0.2, render: { visible: false } }
  });
var cradle = Matter.Composites.newtonsCradle(700, 300, 5, 30, 200);
Matter.World.add(engine.world, [rec, stack, mouseconstraint, cradle, rec2]);
Matter.Engine.run(engine);
Matter.Render.run(render);
function collisiontest(f) {
  f.pairs.forEach(pair => {
    const { label: labelA } = pair.bodyA;
    const { label: labelB } = pair.bodyB;
    if (labelA == "player" && labelB == "object") {
      document.getElementById("audio1").play();
    }
  });
}
Matter.Events.on(engine, "collisionStart", collisiontest);
