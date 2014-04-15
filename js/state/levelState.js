var LevelState = function(game) {  }; 
LevelState.prototype = 
{
  preload: function(game) 
  {
    game.load.tilemap('map', 'config/maps.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('background', 'assets/digital.jpg');
    game.load.spritesheet('player', 'assets/sprite-course-Jaques.png', 64, 64, 8);
    for (var i = 0 ; i  < list.assets.length ; i++){ 
      game.load.image(list.assets[i].name, list.assets[i].src);
    };
    for (var i = 0 ; i  < list.sprite.length ; i++){
      game.load.spritesheet(list.sprite[i].name, list.sprite[i].src, list.sprite[i].width, list.sprite[i].height, list.sprite[i].nombre);
    };
    game.tabEnemy = [];
  },

  create:  function(game)
  {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'background');
    game.map = game.add.tilemap('map');

    game.map.addTilesetImage('ground');
    
    game.layer = game.map.createLayer('Calque 1');

    game.map.setCollisionBetween(1, 12);

    game.world.setBounds(0, 0, 1920, 1200);
    game.entree = new Entree(game);
    game.player = new Player(game);
    game.clone = new Clone(game, 300, 100);
    game.level = getLevel();
    game.keyBoard = game.input.keyboard.createCursorKeys();
    game.physics.enable(game.player.sprite);
    game.physics.arcade.gravity.y = 300;
    game.physics.enable(game.clone.sprite);
    
    game.player.sprite.body.bounce.y = 0.2;
    game.player.sprite.linearDamping = 1;
    game.player.sprite.collideWorldBounds = true;

    game.clone.sprite.body.bounce.y = 0.2;
    game.clone.sprite.linearDamping = 1;
    game.clone.sprite.collideWorldBounds = true;
  },

  update:  function(game)
  {
    game.physics.arcade.collide(game.player.sprite, game.layer);
    game.physics.arcade.collide(game.clone.sprite, game.layer);
    //Debut Appel Waves
    for (var i=0; i < game.level.waves.length; i++){
      game.tabEnemy.push(new Enemy(game,game.level.waves[i].x,game.level.waves[i].y,game.level.waves[i].maxX,game.level.waves[i].minX))
      game.level.waves.splice(i,1);
      i--;
    }
    for (var i = 0; i < game.tabEnemy.length; i++){ 
        game.tabEnemy[i].move();
    }
    if(game.player.action == true){
      game.camera.x += 2;
    }
    game.player.move();

    game.clone.move();
    game.clone.sprite.body.velocity.x = 0;
    game.clone.jump();

    game.player.sprite.body.velocity.x = 0;
    game.player.jump();
    game.player.mort();
  }
};

function getLevel(){
    var waves = [];
    //Ici on crée la wave 0
    for (var i = 0 ; i  < list.enemyLevel.length ; i++){ 
            waves.push({
                id: list.enemyLevel[i].id,
                x: list.enemyLevel[i].x, 
                y : list.enemyLevel[i].y, 
                maxX : list.enemyLevel[i].maxX, 
                minX: list.enemyLevel[i].minX
            })
        }
    return {waves: waves};
}