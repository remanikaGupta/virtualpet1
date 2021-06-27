var dog, happyDog,Dog
var database
var foodS, foodStock

function preload(){

  Dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")

}

function setup() {
  database = firebase.database();
	createCanvas(500,500);
  

  dog = createSprite(250,300,30,30)
 dog.addImage(Dog)
dog.scale=0.19

foodStock=database.ref('food')
  foodStock.on("value",readStock)
}

function draw() {  
  
  background("lightgreen")

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  console.log(foodS)
  dog.addImage(happyDog)
}

drawSprites();

text("Food Remaining : "+ foodS,150,100)

text("NOTE: press UP_ARROW to feed drago milk!!",120,50)

  }

function readStock(data){
foodS = data.val()
}

function writeStock(x){

if(x<=0){
  x=0
}else{
  x=x-1
}
  database.ref('/').update({
    food:x
  })

}