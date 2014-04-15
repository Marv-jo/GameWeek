function Player(game, x, y) {
    this.game = game;
    this.x = x || 200;
    this.y = y || 200;
    this.vitesse = 4;
    this.dead = false;
    this.action = false;
    this.sprite = game.add.sprite(this.x, this.y, 'player');
    this.sprite.animations.add('walk');
}

Player.prototype.move = function(){
    if (this.sprite.x <= game.camera.x) {
        this.dead = true;
    }

    if(game.keyBoard.left.isDown) {
        if(this.action == false){
            this.action = true;
        }    
        this.sprite.x -= this.vitesse; 
    }

    if (game.keyBoard.right.isDown)
    {
        if(this.action == false){
            this.action = true;
        }    
        this.sprite.x += this.vitesse;
        this.sprite.animations.play('walk', 20, true); 
    } else {
        this.sprite.animations.stop;
    }
}

Player.prototype.jump = function() {
    if (this.game.keyBoard.up.isDown)
    {
        if (this.sprite.body.onFloor())
        {
            this.sprite.body.velocity.y = -210;
        }
    }

    if (this.game.keyBoard.left.isDown)
    {
        this.sprite.body.velocity.x = -150;
    }
    else if (this.game.keyBoard.right.isDown)
    {
        this.sprite.body.velocity.x = 150;
    }
};

Player.prototype.mort = function() {
    if (this.dead) {
         game.state.start('MenuState');
    };
};