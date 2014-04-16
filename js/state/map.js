// function map(game) {
// 	this.game = game;
	
// 	this.game.physics.startSystem(Phaser.Physics.ARCADE);
//     this.game.add.sprite(0, 0, 'background');
//     this.game.map = game.add.tilemap('map');
//     this.game.map.addTilesetImage('spritesheet');  
//     this.game.layer = game.map.createLayer('Calque 1');
//     this.game.map.setCollisionBetween(1, 63);
//     this.game.world.setBounds(0, 0, 2560, 1200);
//     this.game.entree = game.add.group();
//     this.game.map.createFromObjects('Calque objets 1', 81, 'entree', 0, true, false, game.entree);
//     //  Add animations to all of the entree sprites
//     this.game.entree.callAll('animations.add', 'animations', 'entree', [0, 1, 2, 3, 4, 5, 6, 7], 10, false);
//     this.game.entree.callAll('animations.play', 'animations', 'entree');
//     this.game.sortie = game.add.group();
//     this.game.map.createFromObjects('Calque objets 1', 73, 'sortie', 0, true, false, game.sortie);
//     //  Add animations to all of the sortie sprites
//     this.game.sortie.callAll('animations.add', 'animations', 'sortie', [0, 1, 2, 3, 4, 5, 6, 7], 10, false);
//     this.game.sortie.callAll('animations.play', 'animations', 'sortie');	
// }