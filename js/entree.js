function Entree(game) {
    this.game = game;
    this.x = 200;
    this.y = 200;
    this.sprite = game.add.sprite(this.x, this.y, 'entree');
    this.sprite.animations.add('walk');
    this.sprite.animations.play('walk', 20, false);
}
