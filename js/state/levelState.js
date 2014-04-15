var LevelState = function(game) {  }; 
LevelState.prototype = 
{
  preload: function(game) 
  {
    game.load.tilemap('map', 'config/maps.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('background', 'assets/digital.jpg');
    for (var i = 0 ; i  < list.assets.length ; i++){ 
      game.load.image(list.assets[i].name, list.assets[i].src);
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
    game.player = new Player(game);
    game.level = getLevel();
    game.keyBoard = game.input.keyboard.createCursorKeys();
    game.physics.enable(game.player.sprite);
    game.physics.arcade.gravity.y = 250;
    game.player.sprite.body.bounce.y = 0.2;
    game.player.sprite.linearDamping = 1;
    game.player.sprite.collideWorldBounds = true;
  },

  update:  function(game)
  {
    game.physics.arcade.collide(game.player.sprite, game.layer);
    //Debut Appel Waves
    for (var i=0; i < game.level.waves.length; i++){
      game.tabEnemy.push(new Enemy(game,game.level.waves[i].x,game.level.waves[i].y,game.level.waves[i].maxX,game.level.waves[i].minX))
      game.level.waves.splice(i,1);
      i--;
    }
    for (var i = 0; i < game.tabEnemy.length; i++){ 
        game.tabEnemy[i].move();
    }
    game.camera.x += 2;
    game.player.move();
    game.player.sprite.body.velocity.x = 0;

    if (game.keyBoard.up.isDown)
    {
        if (game.player.sprite.body.onFloor())
        {
            game.player.sprite.body.velocity.y = -200;
        }
    }

    if (game.keyBoard.left.isDown)
    {
        game.player.sprite.body.velocity.x = -150;
    }
    else if (game.keyBoard.right.isDown)
    {
        game.player.sprite.body.velocity.x = 150;
    }
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