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
    game.add.sprite(0, 0, 'background');
    game.map = game.add.tilemap('map');

    game.map.addTilesetImage('ground');
    
    game.layer = game.map.createLayer('Calque 1');

    game.map.setCollisionBetween(1, 12);

    game.layer.debug = true;
    game.world.setBounds(0, 0, 1920, 1200);
    game.player = new Player(game);
    game.level = getLevel();
    game.keyBoard = game.input.keyboard.createCursorKeys();
  },

  update:  function(game)
  {
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