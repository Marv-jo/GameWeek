function Clone(game, x, y) {
	this.game = game;
	this.x = x;
	this.y = y;
	this.vitesse = 4;
	this.jumping = false;
	this.velocity = 0;
	this.jumpPower = 0;
	this.sprite = game.add.sprite(this.x, this.y, 'player');
}

Clone.prototype.move = function(){
	if (this.sprite.x <= game.camera.x + 100) {
		console.log("ca marche")
		this.sprite.x += this.vitesse; 
	} else if(game.keyBoard.left.isDown) {
		this.sprite.x -= this.vitesse; 
	}

    else if (game.keyBoard.right.isDown)
    {
        this.sprite.x += this.vitesse;
    }
}

Clone.prototype.jump = function() {
	if (!this.jumping && game.keyBoard.up.isDown && this.velocity == 0) {
		this.velocity = this.jumpPower*-1;
		this.jumping = true;
	}

	if (this.velocity < 0) {
		this.velocity++;
	}
	else {
		this.velocity += 0.5;
	}

	this.y += this.velocity;

	if (this.sprite.y + this.sprite.height >= game.height) {
		this.sprite.y = game.height - this.sprite.height;
		
		this.jumping = false;
		this.velocity = 0;
	}
};