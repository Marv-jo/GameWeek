function Map(game) {
    this.game = game;
    this.game.action = false;
    
    this.plateforme = this.game.add.group();
    this.game.map.createFromObjects('Calque objets 1', 32, 'plateforme', 0, true, false, this.plateforme);
    //  Add animations to all of the entree sprites
    if(this.game.action == true){
        this.plateforme.callAll('animations.add', 'animations', 'plateforme', [0, 1, 2, 3], 10, false);
        this.plateforme.callAll('animations.play', 'animations', 'plateforme');
    }
    game.physics.enable(this.plateforme);
    for (var i = this.plateforme.children.length ; i--;){
        this.plateforme.children[i].body.gravity = 0;
        this.plateforme.children[i].body.immovable = true;
    }
    //this.plateforme.body.immovable = true;
    this.plateforme2 = this.game.add.group();
    this.game.map.createFromObjects('Calque objets 1', 35, 'plateforme2', 0, true, false, this.plateforme2);
//  Add animations to all of the entree sprites
    if(this.game.action == true){
        this.plateforme2.callAll('animations.add', 'animations', 'plateforme2', [0, 1, 2, 3], 10, false);
        this.plateforme2.callAll('animations.play', 'animations', 'plateforme2');
    }
    game.physics.enable(this.plateforme2);
    for (var i = this.plateforme2.children.length ; i--;){
        this.plateforme2.children[i].body.gravity = 0;
        this.plateforme2.children[i].body.immovable = true;
    }
    
    this.entree = this.game.add.group();
    this.game.map.createFromObjects('Calque objets 1', 24, 'entree', 0, true, false, this.entree);
    //  Add animations to all of the entree sprites
    this.entree.callAll('animations.add', 'animations', 'entree', [0, 1, 2, 3, 4, 5, 6, 7], 10, false);
    this.entree.callAll('animations.play', 'animations', 'entree');
    this.sortie = this.game.add.group();
    this.game.map.createFromObjects('Calque objets 1', 16, 'sortie', 0, true, false, this.sortie);
    //  Add animations to all of the sortie sprites
    this.sortie.callAll('animations.add', 'animations', 'sortie', [0, 1, 2, 3, 4, 5, 6, 7], 10, false);
    this.sortie.callAll('animations.play', 'animations', 'sortie');    
}