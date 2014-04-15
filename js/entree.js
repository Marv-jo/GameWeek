function Entree(game) {
    this.game = game;
    this.x = 200;
    this.y = 150;
    this.y = 288;
    this.sprite = game.add.sprite(this.x, this.y, 'entree');
    this.sprite.animations.add('open');
    this.sprite.animations.play('open', 20, false);
}
