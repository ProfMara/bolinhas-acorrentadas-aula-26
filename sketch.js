
//Motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;

//adicione a const Constraint

//variaveis
var motor;
var world;

var solo, parado;

var botao;

function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;

    parado = {
      isStatic:true,
    }
    //cria o solo
    solo = Bodies.rectangle(300,390,600,30, parado);
    //adiciona no mundo
    World.add(mundo, solo);
  
    //adiciona a imagem do botão

    //cria o objeto bola da classe Ball


    //cria a corrente da classe 




    ellipseMode(RADIUS);
    rectMode(CENTER);
}


function draw() {
  background("cyan");
    
  //atualizar o motor
  Engine.update(motor);



  //desenha o solo
  fill('brown');
  rect(solo.position.x, solo.position.y, 600, 30);

  //mostra a bolinha
    
   //mostra a corrente

}

//é aqui que adiciona a função para aplicar força na bola
