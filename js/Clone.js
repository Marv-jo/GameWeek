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
        this.sprite.loadTexture('runLeft', 0);
        this.sprite.animations.add('left');
        this.sprite.animations.play('left', 10, true);
        this.sprite.body.velocity.x = -200;
    }

    else if (game.keyBoard.right.isDown)
    {
        this.sprite.body.velocity.x = 200;
        this.sprite.animations.play('walk', 20, true); 
    }
}

Clone.prototype.jump = function() {
    if (this.game.keyBoard.up.isDown)
    {
        this.sprite.loadTexture('saut', 0);
        this.sprite.animations.add('jump');
        this.sprite.animations.play('jump', 10, true);

        if (this.sprite.body.onFloor())
        {
            this.sprite.body.velocity.y = -200;
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