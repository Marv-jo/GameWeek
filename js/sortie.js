function Sortie(game) {
    this.game = game;
    this.x = 1850;
    this.y = 320;
    this.sprite = game.add.sprite(this.x, this.y, 'sortie');
    this.sprite.animations.add('sortie');
    this.sprite.animations.play('sortie', 20, false);
}