function Enemy(game,x,y,max,min) {
	this.game = game;
	this.x = x;
	this.y = y;
	this.vitesse = 5;
    this.going = true;
    this.limiteMax = max;
    this.limiteMin = min;
	this.sprite = game.add.sprite(this.x, this.y, 'enemy');
}

Enemy.prototype.move = function(){
    this.sprite.x += (this.going ? 5 : -5);
    if (this.going && this.sprite.x > this.limiteMax){
        this.going = false;
    }
    if (!this.going && this.sprite.x < this.limiteMin){
        this.going = true;
    }
}