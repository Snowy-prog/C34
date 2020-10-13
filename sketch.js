var ball, database;

var position;


function setup(){
    database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPositionRef = database.ref('ball/position');
    ballPositionRef.on("value",readPosition,showErr);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function showErr(){
    console.log("error in database");
}

function readPosition(data){
    position = data.val();
    console.log(position);
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x: x+position.x,
        y: y+position.y
    })
    
}
