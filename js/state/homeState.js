window.addEventListener("load",init);

function init()
{
  game = new Phaser.Game(800, 640, Phaser.AUTO, 'gameContainer');
  //on ajoute les states du jeu a game
  game.state.add('HomeState' ,HomeState);
  game.state.add('MenuState' ,MenuState);
  game.state.add('OptionsState' ,OptionsState);
  game.state.add('CreditsState' ,CreditsState);
  //game.state.add('QuitState' ,QuitState);
  game.state.add('LevelState' ,LevelState);
  //on lance le mainmenu
  game.state.start('HomeState');
}
var collision = false;
var list = httpGetData("config/config.json");

var HomeState = function(game) {  }; 
HomeState.prototype = 
{
  preload: function(game) 
  {
    for (var i = 0 ; i  < list.assetsMenu.length ; i++){ 
      game.load.image(list.assetsMenu[i].name, list.assetsMenu[i].src);
    };
  },
  create:  function(game) 
  {
    game.btnPlay = game.add.button(game.world.centerX - 250, 150, 'play', startMenu, this, 2, 1, 0);
  },
  update:  function(game)
  {

  }
};

function startMenu () {
  game.state.start('MenuState');
}
