function Player(game) {
    this.game = game;
    this.x = 200;
    this.y = 200;
    this.vitesse = 4;
    this.sprite = game.add.sprite(this.x, this.y, 'player');
}

Player.prototype.move = function(){
    if (this.sprite.x <= game.camera.x) {
        this.sprite.x += this.vitesse; 
    } else if(game.keyBoard.left.isDown) {
        this.sprite.x -= this.vitesse; 
    }

<<<<<<< HEAD
=======
    // if (game.keyBoard.left.isDown)
 //    {    
 //     this.sprite.x -= this.vitesse; 
 //    }
>>>>>>> f6fb3d21f218a547abd2960c50971a0a99963f1c
    else if (game.keyBoard.right.isDown)
    {
        this.sprite.x += this.vitesse;
    }
}