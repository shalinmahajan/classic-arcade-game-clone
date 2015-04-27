// Enemies our player must avoid
var Enemy = function(position) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = 0;
    this.y = position * 80 + 60;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // check the condition if enemy is within canvas
    var positionY = 10 * getRandom();
    var speed = 10 * getRandom();
    if (this.x < 505) {
        //  Providing variable speed to enemy, so all enemies
        //  run at different speed
        this.x = this.x + dt * speed * 20;
    }
    // if enemy goes out, bring it back to start of canvas
    else {
        this.x = 0;
    }
    this.y = this.y;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// On collision of enemy and player, enemy will restart
Enemy.prototype.reset = function() {
    this.x = 0;
    this.y = this.y;
}

// Now write your own player cla
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 250;
    this.y = 420;
    this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function() {

    // Keeps the player within canvas
    if (this.x < 5) {
        this.x = 5;
    } else if (this.x > 400) {
        this.x = 400;
    } else if (this.y < 10) {
        this.y = 10;
    } else if (this.y > 420) {
        this.y = 420;
    }
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            this.x = this.x - 30;
            break;
        case 'up':
            this.y = this.y - 30;
            break;
        case 'right':
            this.x = this.x + 30;
            break;
        case 'down':
            this.y = this.y + 30;
            break;
    }
}
    // On collision of player with enemies, will reset the
    // position of player and score to 0
Player.prototype.reset = function() {
    this.x = 250;
    this.y = 420;
    score = 0;
    return score;
}
    //On reaching water level, life to be increased and
    // player moved to start position
Player.prototype.life = function() {
    if (player.y + 50 < 80) {
        this.x = 250;
        this.y = 420;
        return life++;
    }
}

// Creating Gems Class
var Gems = function() {
    this.x = getRandom() * 150 + 50;
    this.y = getRandom() * 200 + 100;
    this.sprite = 'images/Gem-Blue.png';
};
//Keeping Gems within canvas
Gems.prototype.update = function() {
    if (this.x > 300) {
        this.x = 300;
    }
    else if (this.x < 10) {
        this.x = 10;
    }
    else if (this.y < 10) {
       this.y = 10;
    }
    else if (this.y > 270) {
        this.y = 270;
    }
}
    // To display gems on screen and change gems image at different conditions
Gems.prototype.render = function() {
    if (score < 1000) {
        this.sprite = 'images/Gem-Blue.png';
    }
    else if (score > 1000 && score < 2500) {
        this.sprite = 'images/Gem-Green.png';
    } else if (score > 2500) {
        this.sprite = 'images/Gem-Orange.png';
    }
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //To display score, life, Player name and Game name
    ctx.font = "15pt Impact";
    ctx.fillStyle = "White";
    ctx.fillText("Score : " + score, 380, 80);
    ctx.fillText("Player : " + name, 50, 80);
    ctx.strokeStyle = "Red";
    ctx.strokeText("Score : " + score, 380, 80);
    ctx.strokeText("Player : " + name, 50, 80);
    ctx.fillStyle = "White";
    ctx.fillText("Life : " + life, 280, 80);
    ctx.strokeStyle = "Red";
    ctx.strokeText("Life : " + life, 280, 80);
    ctx.font = "32pt Impact";
    ctx.fillStyle = "White";
    ctx.fillText("<Frogger>", 160, 40);
    ctx.strokeStyle = "Black";
    ctx.strokeText("<Frogger>", 160, 40);
}
//To position gems at random position and increase score
Gems.prototype.reset = function() {
    this.x = getRandom() * 300 + 50;
    this.y = getRandom() * 300 + 100;
    score = score + 100;
    return score;
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemiesNum = 4;
for (i = 0; i < enemiesNum; i++) {
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
// function to generate random number
var getRandom = function() {
    return Math.random();
}
var key = document.addEventListener();

var gems = new Gems();
var score = 0;
//var level="Easy";
confirm(
    "Are you ready to Play the Game--FROGGER");
var namePrompt = prompt("Please enter the Player Name");
var name = namePrompt.toUpperCase();
var life = 2;