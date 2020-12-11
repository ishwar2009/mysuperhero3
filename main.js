
var canvas = new fabric.Canvas('myCanvas')

var blockimagewidth=30;
var blockimageheight=30;

playerx=10;
playery=10;

var blockimageobject="";
var playerobject="";

function playerupdate() {
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
playerobject.scaleToWidth(160);
playerobject.scaleToHeight(160);
playerobject.set({
    top:playery,
    left:playerx
});
canvas.add(playerobject);


    });

    
}

function newimage(get_image) {
    fabric.Image.fromURL(get_image,function(img){
    
        blockimageobject=img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
    
        top:playery,
        left:playerx
    
    });
    canvas.add(blockimageobject);
        

    });
      
       }

    window.addEventListener("keydown",mykeydown);

    function mykeydown(e) {
        keypressed=e.keyCode;
      if(e.shiftKey==true && keypressed=='80'){
        console.log("shift and p");
        blockimagewidth= blockimagewidth+11;
        blockimageheight= blockimageheight+11;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;

        
    }   
    if(e.shiftKey==true && keypressed=='77'){
        console.log("shift and m")
        blockimagewidth= blockimagewidth-11;
        blockimageheight= blockimageheight-11;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
}

if(keypressed=='70') {
    newimage('ironman_face.png');
    console.log("f")
}

if(keypressed=='66') {
    newimage('spiderman_body.png');
    console.log("b")
}

if(keypressed=='76') {
    newimage('hulk_legs.png');
    console.log("l")
}

if(keypressed=='82') {
    newimage('thor_right_hand.png');
    console.log("r")
}

if(keypressed=='72') {
    newimage('captain_america_left_hand.png');
    console.log("h")
}

if(keypressed=='38'){
    up();
    console.log("up");
}


if(keypressed=='40'){
    down();
    console.log("down");
}

if(keypressed=='37'){
    left();
    console.log("left");
}

if(keypressed=='39'){
    right();
    console.log("right");
}

function up() {
    if(playery >= 0) {
        playery= playery-blockimageheight;
        console.log(blockimageheight)
        console.log(playerx,playery)
        canvas.remove(playerobject)
        playerupdate();
    }
}

function down() {
   if(playery <= 435) {
       playery= playery+blockimageheight;
       console.log(blockimageheight)
       console.log(playerx,playery)
       canvas.remove(playerobject)
       playerupdate();
   }
}

function left() {
   if(playerx >= 0) {
       playerx= playerx-blockimagewidth;
       console.log(blockimagewidth)
       console.log(playerx,playery)
       canvas.remove(playerobject)
       playerupdate();
   }
}

function right() {
   if(playerx <= 835) {
       playerx= playerx+blockimagewidth;
       console.log(blockimagewidth)
       console.log(playerx,playery)
       canvas.remove(playerobject)
       playerupdate();
   }
}




        
    }
