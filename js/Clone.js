function Clone(game, x, y) {
    this.game = game;
    this.x = x || 200;
    this.y = y || 200;
    this.vitesse = 4;
    this.sprite = game.add.sprite(this.x, this.y, 'player');
    this.sprite.animations.add('walk');
}

Clone.prototype.move = function(){
    if (this.sprite.x <= game.camera.x) {
        this.sprite.x += this.vitesse; 
    } else if(game.keyBoard.left.isDown) {
        this.sprite.x -= this.vitesse; 
    }

    else if (game.keyBoard.right.isDown)
    {
        this.sprite.x += this.vitesse;
        this.sprite.animations.play('walk', 20, true); 
    }
}

Clone.prototype.jump = function() {
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