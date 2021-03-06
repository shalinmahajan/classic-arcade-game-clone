// Enemies our player must avoid
var Enemy = function (position) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = 20;
    this.y = position * 85 + 65;
    this.sprite = 'images/enemy-bug.png';
    this.speed = this.getspeed();

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.x = this.x + this.speed * dt*5;

    if (this.x > 505) {
       this.x = 0;
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.getspeed = function() {
   var random = Math.random() + 0.5;
    if (Math.floor(random) < 1) {
        this.speed = 3;
    } else {
        this.speed = 6;
    }
   return this.speed;
};

//var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var Player = function() {
   this.x = 320;
   this.y = 360;
   this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function() {
    if (this.x < 20) {
        this.x = 20;
    } else if (this.x > 400) {
        this.x = 400;
   } else if (this.y < 40) {
       this.y = 0;
    } else if (this.y > 400) {
        this.y = 400;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    switch (key) {

        case 'left':
            this.x = this.x - 40;
            break;

        case 'right':
           this.x = this.x + 40;
           break;

        case 'up':
           this.y = this.y - 40;
           break;

        case 'down':
            this.y = this.y + 40;
           break;

        default:
            break;
    }
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemyCount = 4;
var allEnemies = [];

for (var i = 0; i < enemyCount; i++) {
    allEnemies.push(new Enemy(i));
}

var player = new Player();


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