var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400,200,80,30);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);

movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";

movingRect.debug = true;
fixedRect.debug = true;

}

function draw() {
  background(0);

  movingRect.x = mouseX;
movingRect.y = mouseY;


    var value = isTouching(movingRect,gameObject2);

    if(value === true)  
    {
      movingRect.shapeColor ="green";
      gameObject2.shapeColor = "green";
    }
    else if (value === false){
      movingRect.shapeColor ="red";
      gameObject2.shapeColor = "red";
    }

  drawSprites();
}