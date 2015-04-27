// Enemies our player must avoid
var Enemy = function(position) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=0;
    this.y=position*80+60;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

   if(this.x<505){
    //Providing variable speed to enemy
        var speed=6*getRandom();

        this.x=this.x+dt*2+speed;
    }
   else{
    this.x=0;
    if(this.y<300){
        this.y=this.y+80;
    }
    else{
        //providing random Y position to enemy
        var positionY=50*getRandom();
        this.y=this.y-200-positionY;
    }
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player cla
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(){
    this.x=200;
    this.y=300;
   this.sprite='images/char-princess-girl.png';
}
Player.prototype.update=function(){
    if(this.x<60){
        this.x=100;
    }
    else if(this.x>475){
        this.x=450;
    }
    if(this.y<60){
        this.y=100;
    }
    else if(this.y>500){
        this.y=450;
    }


}

Player.prototype.render=function(){

   ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}
Player.prototype.handleInput=function(key){
    switch(key){
        case'left':
            this.x=this.x-50;
           break;
       case'up':
            this.y=this.y-50;
            break;
        case'right':
            this.x=this.x+10;
            break;
       case'down':
            this.y=this.y+10;
            break;
    }

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[];
var enemiesNum=4;
for(i=0;i<enemiesNum;i++){
    allEnemies.push(new Enemy(i));
}
var player=new Player(2);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
var getRandom=function(){
    return Math.random();
}
var key=document.addEventListener();