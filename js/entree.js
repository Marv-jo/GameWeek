function Entree(game) {
    this.game = game;
    this.x = 200;
<<<<<<< HEAD
    this.y = 150;
=======
    this.y = 288;
>>>>>>> 8c4e04c6181740711f20217867d38aa1408b3361
    this.sprite = game.add.sprite(this.x, this.y, 'entree');
    this.sprite.animations.add('open');
    this.sprite.animations.play('open', 20, false);
}
