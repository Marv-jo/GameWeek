function Map(game) {
	this.game = game;
    this.game.action = false;
	
    this.game.plateforme = this.game.add.group();
    this.game.map.createFromObjects('Calque objets 1', 32, 'plateforme', 0, true, false, this.game.plateforme);
    //  Add animations to all of the entree sprites
    if(this.game.action == true){
        this.game.plateforme.callAll('animations.add', 'animations', 'plateforme', [0, 1, 2, 3], 10, false);
        this.game.plateforme.callAll('animations.play', 'animations', 'plateforme');
    }
    this.game.plateforme2 = this.game.add.group();
    this.game.map.createFromObjects('Calque objets 1', 35, 'plateforme2', 0, true, false, this.game.plateforme2);
//  Add animations to all of the entree sprites
    if(this.game.action == true){
        this.game.plateforme2.callAll('animations.add', 'animations', 'plateforme2', [0, 1, 2, 3], 10, false);
        this.game.plateforme2.callAll('animations.play', 'animations', 'plateforme2');
    }

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