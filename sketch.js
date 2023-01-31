const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var con;
//Na linha 8, a variável 'con', foi criada. Agora crie a variável 'ball' e 'button' utilizando a mesma estrutura
var ball;
var button;
function setup() {

  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  //Crie uma variável chamada 'ball_options'
  //Essa variável irá receber 'restitution: 0.95'
  //restitution é a propriedade usada para fazer um corpo quicar
   var ball_options = {
    restitution: 0.95,
  }
   
  //Utilize o código 'createImg' para adicionar uma imagem ao botão
  button = createImg('up.png');
  button.position(20,30);
  //Defina o tamanho do botão para 'size(50,50). Além disso, utilize a mesma estrutura de código da linha anterior
  button.size(50,50);
  //Coloque o nome da função criada na linha 75, pois ela aplicará força na bola
  button.mouseClicked(vForce);


ball = Bodies.circle(100,200,20,ball_options);
World.add(world,ball);

con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    length:100,
    stiffness:0.9
});
World.add(world,con);


rectMode(CENTER);
ellipseMode(RADIUS);
}

function draw()
{
    background(51);
    Engine.update(engine);


    ellipse(ball.position.x,ball.position.y,20);
    strokeWeight(2);
    stroke(255);
    line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
    Engine.update(engine);
}
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}