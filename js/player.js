function Player(game, x, y) {
    this.game = game;
    this.x = x || 200;
    this.y = y || 200;
    this.vitesse = 4;
    this.dead = false;
    this.action = false;
    this.sprite = game.add.sprite(this.x, this.y, 'player');
    this.sprite.animations.add('walk');
    //game.input.onDown.addOnce(changeSprite, this);
}

Player.prototype.move = function(){
    if (this.sprite.x <= game.camera.x) {
        this.dead = true;
    }

    if(game.keyBoard.left.isDown) {
        this.sprite.loadTexture('runLeft', 0);
        this.sprite.animations.add('left');
        this.sprite.animations.play('left', 10, true);

        if(this.action == false){
            this.action = true;
        }    
         this.sprite.body.velocity.x = -200; 
    }

    if (game.keyBoard.right.isDown)
    {
        if(this.action == false){
            this.action = true;
        }    
         this.sprite.body.velocity.x = 200;
        this.sprite.animations.play('walk', 10, true); 
    } else {
        
    }
}

Player.prototype.jump = function() {
    if (this.game.keyBoard.up.isDown)
    { 
        this.sprite.loadTexture('saut', 0);
        this.sprite.animations.add('jump');
        this.sprite.animations.play('jump', 10, true);
        if (this.sprite.body.onFloor())
        {
            this.sprite.body.velocity.y = -200;
            this.sprite.body.mass.y = 200;
        }
    }

    if (this.game.keyBoard.left.isDown)
    {
        this.sprite.body.velocity.x = -200;
    }
    else if (this.game.keyBoard.right.isDown)
    {
        this.sprite.body.velocity.x = 200;
    }
};

Player.prototype.mort = function() {
    if (this.dead) {
        game.state.start('MenuState');
    };
};

// function changeSprite() {
//     console.log("lol");
//     // sprite.loadTexture('saut', 0);
//     // sprite.animations.add('jump');
//     // sprite.animations.play('jump', 3, true);
// };

// Player.prototype.changeSprite = function() {
//     console.log("lol");
//      // this.sprite.loadTexture('saut', 0);
//     // this.sprite.animations.add('jump');
//     // this.sprite.animations.play('jump', 3, true);
// };