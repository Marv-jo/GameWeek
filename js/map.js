function Map(game) {
	this.game = game;
	
    this.game.entree = this.game.add.group();
    this.game.map.createFromObjects('Calque objets 1', 24, 'entree', 0, true, false, this.game.entree);
    //  Add animations to all of the entree sprites
    this.game.entree.callAll('animations.add', 'animations', 'entree', [0, 1, 2, 3, 4, 5, 6, 7], 10, false);
    this.game.entree.callAll('animations.play', 'animations', 'entree');
    this.game.sortie = this.game.add.group();
    this.game.map.createFromObjects('Calque objets 1', 16, 'sortie', 0, true, false, this.game.sortie);
    //  Add animations to all of the sortie sprites
    this.game.sortie.callAll('animations.add', 'animations', 'sortie', [0, 1, 2, 3, 4, 5, 6, 7], 10, false);
    this.game.sortie.callAll('animations.play', 'animations', 'sortie');	
}